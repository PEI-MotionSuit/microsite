---
sidebar_position: 2
---

# Databases

### Relational Database (User Management)
- Purpose: Serves as the primary data store for structured user information and system metadata.
- Technology: PostgreSQL
- Responsibilities: Manages user accounts, authentication credentials, role assignments, permissions, system configuration settings, and relational data requiring ACID compliance and complex query capabilities.

![image](@site/static/img/databases/relational_db.png)

### Time-Series Database - Raspberry Pi (Edge Storage)
- Purpose: Provides local, high-performance storage for sensor data on the Raspberry Pi edge device.
- Technology: SQLite (embedded time-series storage)
- Responsibilities: Captures and stores raw sensor measurements with microsecond-precision timestamps, maintains data persistence during network interruptions, and serves as the authoritative source for data synchronization to the backend when connectivity is restored.

![image](@site/static/img/databases/raspberry_db.png)

### Time-Series Database - Backend (Central Storage)
- Purpose: Serves as the centralized repository for all historical biomechanical sensor data.
- Technology: TimescaleDB (PostgreSQL extension for time-series)
- Responsibilities: Aggregates sensor data synchronized from Raspberry Pi devices, enables long-term data retention and analytics, supports complex temporal queries for trend analysis and reporting, and provides the data foundation for the Analytics Service and Export Service.

![image](@site/static/img/databases/timeseries_db.png)

### Document-Oriented Database (Calibration Data)
- Purpose: Maintains flexible, user-specific calibration profiles and baseline configurations.
- Technology: MongoDB
- Responsibilities: Stores individualized sensor zero-point calibration values, user-specific threshold baselines for the Alert Engine, personalized movement patterns, and configuration parameters that require schema flexibility and rapid read access for real-time processing.