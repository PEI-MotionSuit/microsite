---
sidebar_position: 1
---

# Architecture

## System Overview
The MotionSuit system implements a secure edge-to-cloud architecture designed to collect, process, and visualize high-frequency biomechanical telemetry. The system is designed around a decoupled edge-to-cloud pattern consisting of an edge processing node (Raspberry Pi) and a unified, modular backend deployed in the cloud.

Security and request orchestration are handled at the network perimeter: all external traffic enters through a reverse proxy acting as an API gateway, while authentication, Single Sign-On (SSO), and Role-Based Access Control (RBAC) are delegated to a Keycloak identity management service.

![image](@site/static/img/architecture.png)

## Architectural Components
The architecture is composed of several discrete components cooperating across the edge and cloud boundaries:

- **Sensors**: Fourteen BNO055 Inertial Measurement Units (IMUs) distributed across skeletal joints to capture real-time physical orientations.
- **Edge Node (Raspberry Pi)**: Interfaced with the sensor array via dual I2C multiplexers. It runs a lightweight Python environment responsible for sensor management, local calibration, data preprocessing, and real-time streaming.
- **Reverse Proxy and Gateway (Nginx)**: Serves as the unified security gateway at the cloud perimeter, managing SSL/TLS termination and API request routing.
- **Identity and Access Provider (Keycloak)**: Secures all resources, managing user credentials, custom onboarding, and role-based access control (RBAC) token generation.
- **Application Server (FastAPI)**: The core server engine, structured as a layered application to enforce separation of concerns and handle business logic.
- **Storage Tier**: A polyglot storage layout managing relational metadata, central time-series telemetry, calibration baselines, and local edge caching.
- **Frontend Views (React / Vite)**: A single-page web application compiled with Vite, providing role-based dashboard interfaces for Suit Users, Researchers, and Administrators.



## Edge Node (Raspberry Pi) Internal Structure
The edge processing environment running on the wearable suit's Raspberry Pi is composed of several lightweight Python services designed to handle local hardware operations and data transmission:

- **Multiplexed Polling & Sensor Management Service**: Coordinates the discovery, registration, and monitoring of connected sensor hardware. It manages sequential bus channel switching on the dual TCA9548A multiplexers to poll the default `0x28` address of the 14 active sensors without conflict, and pushes user-specific calibration settings directly to each sensor.
- **Data Preprocessing & Quality Engine**: Interfaces directly with sensor drivers to perform raw data acquisition, filters high-frequency noise, re-maps local coordinate axes, and applies calibration offsets. It conducts strict data validation checks to flag corrupted or implausible readings.
- **Store-and-Forward Caching Agent**: Coordinates circular buffers to manage data backlog during network latency. It aligns timestamps across all sensor streams using hardware clock synchronization protocols and caches processed data in a local time-series SQLite cache on the Pi, guaranteeing data persistence until connection pathways reopen.
- **Telemetry Marshaller & WebSocket Dispatcher**: Packages orientation metrics into compact JSON payloads, applying optimization techniques to minimize packet size. It maintains a secure, persistent, full-duplex WebSocket server to stream real-time telemetry over the secure Tailscale VPN network, supporting heartbeat checks, session authentication, and backpressure handling.



## Reverse Proxy and Gateway (Nginx)
The network gateway manages perimeter security and routing for external connections through two main modules:

- **SSL/TLS Termination Module**: Manages certificates and encrypts client connections (HTTPS and secure WebSockets).
- **API Gateway Router**: Evaluates URL paths and proxies incoming requests to backend service containers.



## Identity and Access Provider (Keycloak)
Keycloak acts as the centralized identity provider to secure all API resources:

- **User Directory & Realm Config**: Stores logins, credentials, and user profiles.
- **Custom Onboarding & Authentication Flows**: Implements customized themes (using Keycloakify) to manage sign-in, sign-up, password recovery, and email verification.
- **Token Generator**: Issues signed JSON Web Tokens (JWT) containing user identity and RBAC role claims to authorize all requests.



## Application Server (FastAPI) Internal Structure
The FastAPI application serves as the central server engine. It is structured using a layered architecture to enforce a strict separation of concerns:

### Presentation Layer (Routers/Endpoints)
This layer validates path parameters, handles HTTP requests and WebSocket handshakes, and inspects JWT role claims on every request.

### Business Logic Layer (Services)
This layer implements core calculations and holds the business logic for the three system personas. It is partitioned into specialized service modules:

- **Data Ingestion Service**: Handles data acquisition, validation, and sanitization for telemetry data synchronized from the edge node.
- **Alert Engine**: Evaluates live orientations against static posture limits, manages thresholds based on user baselines, and dispatches notifications.
- **Posture Analysis**: Computes aggregate biomechanical statistics, tracks posture trends, and evaluates gamification XP and streak milestones.
- **User Management Service**: Polls Keycloak for user account management.
- **Administration Service**: Coordinates researcher registration approvals, manages user deactivation workflows, and collects operational metrics.
- **Audit Service**: Captures audit logs and operational metrics all across the system.
- **Export Service**: Translates and formats telemetry and study history into PDF, CSV, and JSON files for batch downloads.
- **Sensor Calibration Service**: Collects raw initialization frames and stores baseline reference points for each wearer.

### Persistence Layer
Decouples business calculations from data storage systems, using SQLAlchemy models and database object mappers to query and save records.



## Storage Tier
The data storage architecture uses a polyglot configuration optimized for high-volume time-series telemetry and structured configuration storage:

- **PostgreSQL (Relational User Metadata)**: Serves as the primary ACID-compliant store for structured account information.
- **TimescaleDB (Central Time-Series Telemetry)**: Serves as the high-performance repository for all historical biomechanical sensor data. It aggregates synchronized data streamed from multiple sessions, executing optimized temporal queries for trend analysis, analytical reporting, and export tasks.
- **MongoDB (Calibration & Baseline Profiles)**: Houses flexible, document-oriented configuration profiles. It stores individualized sensor zero-point reference configurations.
- **Edge Time-Series Cache (Local Pi Storage)**: Implemented on the Raspberry Pi node, this database is responsible for capturing raw measurements, acting as the edge source of truth that preserves telemetry until sync pathways reopen.



## Real-Time Data Flow
To support real-time feedback without compromising the security of the application, telemetry data traverses a strict pipeline from the physical sensors to the client browser:

1. **Data Acquisition**: The Raspberry Pi sequentially polls the fourteen BNO055 sensors over the multiplexed I2C buses, reading raw orientation (quaternions) and calibration flags.
2. **Local Processing and Packaging**: The Pi's Edge Service aggregates the raw samples, performs lightweight signal preprocessing (filtering noise), and marshals the synchronized joint coordinates into a compact JSON telemetry frame.
3. **Secure Transmission**: The telemetry frames are dispatched over a secure mesh VPN (Tailscale) connection to the cloud deployment's public IP address.
4. **Ingestion & Gateway Verification**: The Nginx reverse proxy receives the inbound WebSocket stream, validates the TLS handshake, and proxies the telemetry packets to the backend application container.
5. **Token Claims Inspection**: The FastAPI server validates the incoming WebSocket connection by verifying the Keycloak-issued JWT token. Only connections presenting a token with the required role (`suit_user`) are allowed to establish a data-streaming session.
6. **Dual-Path Distribution**: FastAPI immediately relays the JSON frame via an active WebSocket connection to the authenticated user's React frontend for live visualization, and simultaneously pushes the frame to an ingestion queue for persistence in TimescaleDB.
7. **Exoskeleton Rendering**: The React web client receives the quaternion coordinates, parses them, and passes them to a 3D rendering canvas (implemented using Three.js). The engine applies the joint rotations to a virtual skeletal avatar, replicating the user's movements on the dashboard at the current telemetry frame rate.



## Frontend Views
The frontend web client application is compiled as a unified single-page application using React and Vite, with role-based routing (enforced by checking Keycloak tokens) to partition the interface into three specialized views:

### Suit User View
The Suit User view is designed to help the wearer monitor their body movements, correct ergonomic issues in real time, and track their long-term posture improvement:
- **Real-Time 3D Exoskeleton**: Leverages Three.js (via React Three Fiber) to render a skeletal model that mirrors the wearer's movements. Joint rotations are color-coded in real time to reflect local joint stress.
- **Ergonomic Risk Gauges**: Displays active REBA (Rapid Entire Body Assessment) and ROSA (Rapid Office Strain Assessment) scores computed frame-by-frame by the backend.
- **Postural Alerts Config**: Allows the user to toggle and customize alert modes (in-app notifications, audible warnings, or physical haptic buzzes on the suit) that fire when a bad posture is sustained for more than 15 seconds.
- **Historical Analytics**: Integrates trend charts and filters (daily, weekly, monthly, yearly views) tracking posture scores, alert counts, and suit wearing time.
- **Gamification Board**: Features XP progression tracking, user level badges, daily streaks, and weekly challenges to incentivize healthy working habits.
- **JARVIS Assistant**: A conversational AI interface running on local LLM infrastructures (Ollama), enabling natural language queries regarding posture logs, summaries, and physical recommendations.

### Researcher View
The Researcher view provides tools to organize scientific studies, register participants, and analyze ergonomic data across cohorts:
- **Protocol Builder**: Enables researchers to establish clinical or workspace studies with specific deadlines and participant targets.
- **Participant Directory**: Displays cohort participants with demographic metadata (age, occupation, gender), using anonymized IDs to maintain privacy.
- **Biomechanical Analysis Workspaces**: Renders aggregated cohort graphs, historical REBA/ROSA statistics, and alert frequencies across different demographics or protocol groups.
- **Bulk Data Exporter**: Generates and downloads comprehensive study telemetry dumps in CSV, JSON, and PDF formats for offline statistical analysis.

### Administrator View
The Administrator view manages overall system configuration, moderates access, and monitors server operations:
- **User Moderation Portal**: Displays all registered accounts. Administrators can deactivate profiles, review pending researcher requests, and approve or reject researcher roles.
- **Keycloak User Deletion Flow**: Triggers Keycloak APIs to execute hard deletions of account credentials while initiating soft-deletion tasks in the local database to preserve audit integrity.
- **System Resource Monitor**: Displays real-time operational metrics for all running containers, including CPU utilization, memory allocations, active WebSocket counts, and database connection pool statuses.
