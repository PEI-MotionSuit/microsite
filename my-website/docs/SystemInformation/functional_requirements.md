---
sidebar_position: 2
---

# Functional Requirements

Since the MotionSuit is a big system we will have 3 main actors. The main actors are the **suit users**, the **administrators** and the **researchers**.

## Funcional Requirements

The funcional requirements are used to define the function of a software system.

### User Management and Authentication
- The system must allow new user registration.
- The system must implement secure authentication (login/logout).
- The system must support multiple profiles (User, Researcher, Administrator).
- The system must allow the user to connect the costume to the user account.


### Data Capture and Processing
- The system must capture real-time movement data from sensors.
- The system must process physiological data (heart rate, temperature).
- The system must calculate joint angles and postural metrics.
- The system must analyze movement patterns in real time.
- The system must be able to capture user movements and access data in real time.
- The system must perform analysis on user movements, showing a "trend" over time.

### Alerts and Notifications System
- The system must generate alerts when incorrect postures are maintained for >30 seconds.
- The system must notify when joint angles exceed safe limits.
- The system must support multiple alert types (in-app notification, audio, visual).
- The system must warn the user (through notifications and alerts) of potentially harmful postures.

### Visualization and Dashboard
- The system should display real-time metrics (updated every 2 seconds).
- The system should display visual status indicators (Green/Yellow/Red).
- The system should provide historical views with trend graphs.
- The system should allow filtering of data by period (7 days, 30 days, 3 months).
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
- The system should allow user account management (create/edit/deactivate).
- The system should provide an administrative dashboard with system metrics.
- The system should maintain activity logs for all users.

<!-- r -->