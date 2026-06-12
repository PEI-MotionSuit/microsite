---
sidebar_position: 3
---

# Functional Requirements

Since the MotionSuit is a big system we will have 3 main actors. The main actors are the **suit users**, the **administrators** and the **researchers**.

## Funcional Requirements

The funcional requirements are used to define the function of a software system.

### User Management and Authentication
- The system must allow new user registration.
- The system must implement secure authentication (login/logout).
- The system must support multiple profiles (User, Researcher, Administrator).
- The system must allow the user to connect the suit to the user account.


### Data Capture and Processing
- The system must capture real-time movement data from sensors.
- The system must calculate joint angles and postural metrics.
- The system must analyze movement patterns in real time.
- The system must be able to capture user movements and access data in real time.
- The system must perform analysis on user movements, showing a "trend" over time.

### Alerts and Notifications System
- The system must generate alerts when incorrect postures are maintained for >15 seconds.
- The system must notify when the score for the body segments is exceed.
- The system must support multiple alert types (in-app notification, audio, visual).
- The system must warn the user (through notifications and alerts) of potentially harmful postures.

### Visualization and Dashboard
- The system should display real-time metrics (updated as soon as the data is received).
- The system should display visual status indicators (Green/Yellow/Red).
- The system should provide historical views with trend graphs.
- The system should allow filtering of data by period (days, weeks, months).
- The system should present a dashboard with the information obtained by the sensors.


### Goal and Progress Management
- The system should allow you to set personalized postural improvement goals.
- The system should track progress in real time with visual indicators.
- The system should implement a rewards and achievements system.
- The system should provide weekly progress reports.

### Data Management and Data Export
- The system should allow data export in PDF, CSV, and JSON formats.
- The system should generate comparison reports between users or periods.

### System Administration
- The system should allow user account management (view details and deactivate accounts).
- The system should allow aprovement/rejection of Researcher account requests.
- The system should provide an administrative dashboard with system metrics.
- The system should maintain activity logs for all users.

<!-- r -->