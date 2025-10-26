---
sidebar_position: 1
---

# Architecture

## System overview
The proposed system architecture implements a comprehensive biomechanical monitoring solution supporting six distinct user interfaces, one web application, and one Raspberry Pi server deployment. The design follows a microservices pattern to ensure scalability, maintainability, and clear separation of concerns across functional domains.

![image](@site/static/img/arquitetura.png)

## Frontend Architecture
The frontend architecture provides differentiated user experiences based on role-based access control, implementing two primary application modes:

#### <u>Administrator Portal</u>
- System Monitoring Interface: Real-time dashboard displaying system health metrics – such as sensor live battery, service status, and operational analytics
- Data Export Interface: Tools for generating and exporting reports in PDF, CSV, and JSON formats with comparative analysis capabilities
- User Management Interface: User account administration including creation, modification, deactivation, and role assignment

#### <u>User Dashboard</u>
- Real-time Monitoring Interface: Live data visualization and feedback during suit operation with immediate posture and movement analysis
- Historical Analytics Interface: Longitudinal data review with trend analysis, performance metrics, and progress tracking over time
- Profile Management Interface: Personal account configuration, and preference management

## Backend Microservices Architecture

#### <u>Data Ingestion Service</u>
Purpose: Handles data acquisition dumped to the main application’s backend when the user connects to the raspberry’s server
- Data Validation & Sanitization: Ensures data integrity and compliance with expected formats
- Data storing: When the user connects to the raspberry’s server, the data on the time-series DB on the raspberry is dumped to the application’s backend running on the user’s machine, which is then saved to the application’s main time-series DB to ensure no data is lost

#### <u>Processing Pipeline</u>
Purpose: Transforms raw sensor data into actionable biomechanical insights
- Sensor Fusion Service: Correlates and synthesizes data from multiple sensor inputs
- Posture Classification Service: Identifies and categorizes user postures (further down the line ML could be implemented here)
- Fatigue Analysis Service: Detects fatigue patterns
- Movement Pattern Recognition: Analysis and recognition of repetitive user movements

#### <u>Alert Engine</u>
Purpose: Monitors user data streams and triggers appropriate notifications
- Rule Manager: Configures and maintains alert criteria and business rules
- Threshold Calculator: Dynamically adjusts alert thresholds based on individual user baselines (stored on the document-oriented DB)
- Notification Dispatcher: Coordinates delivery of alerts across supported platforms

#### <u>Analytics Service</u>
Purpose: Provides business intelligence and reporting capabilities
- Trend Analysis: Identifies patterns and correlations in user data over time
- Statistical Aggregation: Computes summary statistics and performance metrics
- Report Generator: Creates structured reports for both individual and comparative analysis

#### <u>User Management Service</u> 
Purpose: Manages user identities, authentication, and authorization
- Authentication Service: Handles user login, session management, and security tokens
- Profile Manager: Maintains user preferences, historical data, and personal configurations

#### <u>Administration Service</u>
Purpose: Provides system administration and operational oversight
- User management: Administrative operations for user accounts with bulk processing capabilities
- System management: Aggregates operational metrics, service health status, and usage statistics
- Role-Based Access Control: Enforces permission policies and administrative privilege management
- Administrative operations: System configuration, maintenance controls, and global settings management

#### <u>Audit Service</u>
Purpose: Maintains comprehensive activity logs for security and compliance
Activity Logger: Captures user actions, system events, and data access patterns
Log Query Engine: Provides filtered search, aggregation, and retrieval of audit records
Compliance Exporter: Generates audit trails for regulatory and security reviews
Retention Policy Manager: Automates log lifecycle management and archival processes

#### <u>Export Service</u>
Purpose: Handles data export and comparative reporting functionality
- Report Generator: Creates customized reports for users, periods, and system metrics
- Data Formatter: Transforms data into required formats (PDF, CSV, JSON) with appropriate styling
- Comparison Engine: Performs statistical comparisons between users and time periods
- Batch Export Processor: Manages asynchronous export jobs with progress tracking
  
## Raspberry Backend
The Raspberry Pi serves as the computing hub that interfaces directly with wearable sensors, providing real-time data acquisition and preprocessing. This edge layer ensures low-latency processing and operational resilience even during network interruptions.

#### <u>Sensor data aggregation</u>
Purpose: Unifies heterogeneous sensor data streams into standardized, time-synchronized packets for efficient storage.
- Buffer Management: Implements circular buffers for temporary data storage during network latency periods
- Time-Synchronization Engine: Aligns timestamps across all sensor sources using hardware clock synchronization

#### <u>Sensor management</u>
Purpose: Provides comprehensive lifecycle management and monitoring of all connected sensor hardware.
- Sensor Discovery & Registration: Interface to add and authenticate new sensors
- Configuration Manager: Pushes calibration parameters and operational settings to individual sensors

#### <u>Data collection/processing</u>
Purpose: Executes essential data preprocessing and quality assurance to reduce application’s processing load and ensure data integrity.
- Raw Data Acquisition: Interfaces with sensor drivers to collect raw biomechanical measurements
- Signal Preprocessing: Applies noise filtering, outlier detection, and signal normalization algorithms
- Data Quality Validation: Implements sanity checks and validation rules to flag corrupted or implausible readings
- Local Data Caching: Stores processed data in a time-series DB to ensure no data is lost. This data is then dumped to the user when they connect to the raspberry’s server
  
#### <u>Data marshalling and dispatching</u>
Purpose: Provides real-time data streaming and protocol transformation for direct client connections, enabling immediate feedback to users during suit operation.
- Multi-Format Marshalling: Converts internal data structures to the correct data format ready to be sent to the client
- Payload Optimization: Minimizes data payload size while preserving critical biomechanical information
- Type Validation: Ensures data integrity during format transformation processes
- WebSocket Server: Maintains persistent, full-duplex connections with connected clients
- Session Authentication: Validates user credentials and establishes secure communication channels
- Heartbeat Monitoring: Implements keep-alive mechanisms to detect and clean up stale connections
- Quality-of-Service Tiers: Provides differentiated data streaming rates based on network conditions
- Backpressure Handling: Manages data flow control when clients experience processing bottlenecks

