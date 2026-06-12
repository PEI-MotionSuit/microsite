---
sidebar_position: 7
---

import SuitUsers from "@site/static/img/useCases/suit_user_use_case.png";
import AdminResearch from "@site/static/img/useCases/admin_researcher_use_cases.png";

# Use Cases

<img src={SuitUsers} width="550"/>

### UC-1 – Receive Posture Alerts
**Actor:** Suit User <br />
**Description:** The user receives real-time alerts when adopting a harmful posture.

**Preconditions:**
- Suit connected and calibrated.
- User logged into the app.
  
**Main Flow:**
1. User wears MotionSuit.
2. Suit streams motion data to the app (`<100ms` latency).
3. System detects an incorrect posture:
    - Exceeds joint safety limits, or
    - Maintained for `>15s`, or
    - Matches a risk pattern.
4. App sends chosen alert (vibration, sound, or notification).
5. User corrects posture; alert stops.

**Postconditions:** Alert logged in user history.



### UC-2 – View Session History
**Actor:** Suit User <br />
**Description:** User views their complete session history.

**Preconditions:** User logged in.

**Main Flow:**
1. Open Profile page.
2. The page displays a list of all the sessions the user started in that especific account.
3. Optional export data:
    - Period filters: 7 days, 30 days, 90 days.
    - Export data as PDF, CSV and JSON for sharing with healthcare professionals.

**Postconditions:** Data visualized and optionally saved.



### UC-3 – Monitor Real-Time Metrics
**Actor:** Suit User <br />
**Description:** View live biometric and posture information.

**Main Flow:**
1. User accesses Dashboard.
2. The dashboard displays a real-time 3D model that reproduces the user’s movements based on colected data.
3. System displays:
    - REBA/ROSA score
    - Body temperature
4. Color indicators show normal/warning/risk in the posture angles.
5. Automatic updates in real-time.

**Postconditions:** Continuous feedback provided.


### UC-4 – Customize Alerts
**Actor:** Suit User <br />
**Description:** Configure how and when alerts are triggered.

**Main Flow:**
1. Open Settings Page.
2. Choose:
    - Notification type
    - Quiet hours
3. Preferences saved automatic.

**Postconditions:** Personalized alert rules active.



### UC-5 – Calibrate the Suit
**Actor:** Suit User <br />
**Description:** Ensure suit sensors measure correctly.

**Main Flow:**
1. Start Calibration in app.
2. Follow visual step-by-step poses.
3. System validates sensor data quality.
4. Displays “Calibration successful.”

**Alternative:** Retry or factory reset if failed.

**Postconditions:** Calibration profile stored with timestamp.



### UC-6 – Define Improvement Goals
**Actor:** Suit User <br />
**Description:** User sets posture improvement objectives.

**Main Flow:**
1. Open Goals tab → “Create New Goal.”
2. Choose:
    - Type (max risk-time, min good-posture, etc.)
    - Difficulty level
    - Duration (daily/weekly/custom)
3. Goal saved and tracking begins.

**Postconditions:** New goal recorded in profile.



### UC-7 – Track Goal Progress
**Actor:** Suit User <br />
**Description:** Monitor progress toward posture goals in real-time.

**Main Flow:**
1. Access Goal Progress page.
2. See:
    - Progress bars
    - Countdown timers
    - Streak counters
3. App sends motivational notifications:
    - “Almost there”
    - Weekly summary
4. Success celebrations displayed.

**Postconditions:** Progress logged; streaks updated.



### UC-8 – Earn Rewards and Achievements
**Actor:** Suit User <br />
**Description:** User receives recognition for consistent improvement.

**Main Flow:**
1. System monitors goal completion.
2. When criteria met:
    - Assigns badges (“Posture Pioneer”, “Risk Reducer”, etc.)
    - Adds points and levels
3. If streak milestones achieved:
    - Levels (level 1, 2,3, etc.)
    - Success message/alert shown

**Postconditions:** Achievements saved in user profile.

<img src={AdminResearch} width="550"/>

### UC-9 – Access Full System Information
**Actor:** Administrator <br />
**Description:** View all project and user data for monitoring.

**Main Flow:**
1. Administrator logs in with elevated permissions.
2. Accesses:
    - GitHub organization & repos
    - Project documentation
    - User activity logs
3. Can reset passwords or assist users.

**Postconditions:** Administrator actions recorded in audit log.



### UC-10 – Manage User Accounts
**Actor:** Administrator <br />
**Description:** Modify or deactivate accounts.

**Main Flow:**
1. Open User Management panel.
2. Edit/deactivate user profiles.
3. Approve and reject researchers.
4. View usage statistics per user.

**Postconditions:** Account changes saved in system database.



### UC-11 – Analyze Captured Data
**Actor:** Researcher <br />
**Description:** Investigate postural deviations and patterns.

**Main Flow:**
1. Logs into analytics dashboard.
2. Selects dataset (time range / participants).
3. Applies filters:
    - Posture vs. time of day
    - Temperature vs. physical activity
4. Exports results (CSV / JSON)

**Postconditions:** Data prepared for scientific analysis.



### UC-12 – Compare Data Across User Groups
**Actor:** Researcher <br />
**Description:** Compare posture data across demographics or professions.

**Main Flow:**
1. Selects comparison parameters:
    - Profession, age, gender, injury history.
2. System aggregates and contrasts datasets.
3. Generates visual charts highlighting significant differences.
4. Exports automatic comparison report.

**Postconditions:** Group-based analysis stored or exported.


### UC-13 – Manage Experimental Studies

**Actor:** Researcher 
**Description:** Create and organize experimental studies and assign participants to them.

**Main Flow:**
1. Navigates to the experiments management section.
2. Creates a new study by defining title, description, start/end dates, and target participant count.
3. Assigns or removes individual participants to/from active studies.
4. Updates the lifecycle status of the study (Planning, In Progress, Completed).

**Postconditions:** Experimental study is structured, updated, and populated with participants.

### UC-14 – Visually Explore Data

**Actor:** Researcher 
**Description:** Use interactive charts to identify trends, correlations, and anomalies in aggregated data.

**Main Flow:**
1. Accesses the visual analysis dashboard.
2. Filters the view to analyze either the global participant pool or a specific experimental study.
3. Groups the visualized data dynamically by demographic variables (e.g., profession, age).
4. Interacts with charts illustrating key metrics (e.g., posture scores over time, alert frequency heatmaps).
5. Exports the specific data subset currently represented in the visual charts.

**Postconditions:** Visual insights are obtained and the focused data subset is exported.

### UC-15 – Export Data Subsets

**Actor:** Researcher 
**Description:** Download specific subsets of captured data in various formats for external analysis.

**Main Flow:**
1. Navigates to the data export interface.
2. Selects the data scope (e.g., individual session data, raw user data, full system data, or filtered user groups).
3. Applies predefined timeframe filters (last 7 days, last 30 days, or all time).
4. Chooses the desired export file format (CSV, JSON, or PDF).
5. Executes the export and downloads the generated file.

**Postconditions:** Selected data is securely downloaded to the researcher's local machine in the chosen format.


### UC-16 – Login & Authentication
**Actor:** Suit User / Researcher / Administrator <br />
**Description:** The user securely logs into the MotionSuit application to access personalized features, data, and permissions.

**Preconditions:**
- User has a valid registered account.
- Internet connection is available.

**Main Flow:**
1. User opens the MotionSuit app or web dashboard.
2. System displays the login screen.
3. User enters credentials (email and password).
4. System validates the credentials in the database.
5. If authentication succeeds:
    - The system loads the appropriate dashboard based on user role (User / Researcher).
    - There is only one Admin and it is already created.
    - If the user is a researcher, they will need Admin approval to enter the app.
6. Session token is generated and stored securely for the current session.


**Alternative Flows:**
- A1: Incorrect credentials → system displays error message (“Invalid username or password”).
- A2: Forgotten password → user selects “Forgot Password”, receives a reset email, and creates a new password.


**Postconditions:**
- User is logged in and has secure access to their profile and data.
- Session audit entry logged in system.

**Special Requirements:**
- Passwords must be encrypted.

