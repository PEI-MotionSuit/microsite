---
sidebar_position: 4
---

# Non-functional Requirements

Non-functional requirements are requirements related to the use of the application in terms of performance, usability, reliability, security, availability, maintenance and the technologies involved. These requirements concern how the functionalities will be delivered to the software user.

### Performance & Responsiveness
- Dashboard Load Time: The system dashboard shall render initial content within 3 seconds and become fully interactive within 5 seconds for 95% of requests under normal load conditions.
- Real-time Updates: User interfaces shall refresh biomechanical metrics with a maximum latency of 2 seconds from sensor measurement to display.
  
### Security & Privacy
- Data Encryption: All protected health information (PHI) shall be encrypted at rest using AES-256 and in transit using TLS 1.3.
- Authentication Security: User credentials are managed by Keycloak, the application server never stores or has direct access to raw passwords.
- Access Control: Role-based access control (RBAC) shall enforce minimum privilege principles across all system modules.

### Reliability
- Data Durability: The system shall guarantee zero data loss during network interruptions through local data caching and graceful recovery mechanisms.
- Offline operationability: The system must support offline operationability through local data caching.
- Fault Tolerance: Individual microservice failures shall not cascade to other system components.

### Usability & User Experience
- Learnability: New users shall be able to perform basic monitoring tasks without training within 15 minutes of first use.
- Customization: Users shall be able to personalize dashboard layouts, alert thresholds, and data visualization preferences.
- Accessibility: Web interfaces shall comply with WCAG 2.1 Level AA standards for users with visual and motor impairments.

### Hardware Constraints
- Wearability: The hardware components shall be lightweight and flexible enough to be worn for extended periods (e.g., full work shifts) without restricting natural body movement.
- Sensor Coverage: The system shall support a distributed set of motion sensors capable of capturing orientation data from all major body segments to enable full‑body posture reconstruction.
- Sampling Adequacy: The sensor sampling rate shall be sufficient to detect meaningful changes in posture and trigger real‑time alerts without perceptible delay to the user.
  
### Data Management
- Query Performance: Database queries for user-facing operations shall return results within 5 seconds for 95% of requests.
- Data Retention: Raw sensor data shall be retained for 30 days, aggregated metrics for 90 days, and user account data indefinitely unless deleted.

### Maintainability & Scalability
- Modularity: System components shall expose well-defined APIs, allowing individual microservices to be updated or replaced without system-wide redeployment.
- Extensibility: The sensor integration layer shall support addition of new sensor types through configuration changes rather than code modifications.
- Documentation: All APIs shall include comprehensive OpenAPI specifications, and architectural decisions shall be documented following ADR principles.


<!-- r -->