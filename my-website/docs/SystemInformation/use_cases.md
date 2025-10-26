---
sidebar_position: 6
---

import SuitUsers from "@site/static/img/useCases/suit_users.jpg";
import AdminResearch from "@site/static/img/useCases/Admin_Researcher.jpg";

# Use Cases

<img src={SuitUsers} width="550"/>

<img src={AdminResearch} width="550"/>

### UC-1 – Receive Posture Alerts
**Actor:** Suit User <br />
**Description:** The user receives real-time alerts when adopting a harmful posture.

**Preconditions:**
- Suit connected and calibrated
- User logged into the app
  
**Main Flow:**
1. User wears MotionSuit.
2. Suit streams motion data to the app (`<100ms` latency).
3. System detects an incorrect posture:
    - Exceeds joint safety limits, or
    - Maintained for `>30s`, or
    - Matches a risk pattern.
4. App sends chosen alert (vibration, sound, or notification).
5. User corrects posture; alert stops.

**Postconditions:** Alert logged in user history.



### UC-2 – View Historical Statistics
**Actor:** Suit User <br />
**Description:** User views posture trends and improvements.

**Preconditions:** User logged in.

**Main Flow:**
1. Open “Statistics” tab.
2. System loads charts:
    - Weekly/monthly posture trend
    - Time in risky postures per day
    - % improvement
3. User filters period (7 days / 30 days / 3 months).
4. Optional: Export report as PDF.

**Postconditions:** Data visualized and optionally saved.



### UC-3 – Monitor Real-Time Metrics
**Actor:** Suit User <br />
**Description:** View live biometric and posture information.

**Main Flow:**
1. User accesses Dashboard.
2. System displays:
    - Heart rate
    - Posture angles
    - Body temperature
    - Suit battery
3. Color indicators show normal/warning/risk.
4. Data updates every 2s.

**Postconditions:** Continuous feedback provided.


### UC-4 – Customize Alerts
**Actor:** Suit User <br />
**Description:** Configure how and when alerts are triggered.

**Main Flow:**
1. Open Alert Settings.
2. Choose:
    - Sensitivity (low/med/high)
    - Notification type
    - Quiet hours
    - Posture thresholds
3. Save preferences.

**Postconditions:** Personalized alert rules active.



### UC-5 – Define Improvement Goals
**Actor:** Suit User <br />
**Description:** User sets posture improvement objectives.

**Main Flow:**
1. Open Goals tab → “Create New Goal.”
2. Choose:
    - Type (max risk-time, min good-posture, etc.)
    - Difficulty level
    - Duration (daily/weekly/custom)
3. System validates realism (warns if too ambitious).
4. Goal saved and tracking begins.

**Postconditions:** New goal recorded in profile.



### UC-6 – Track Goal Progress
**Actor:** Suit User <br />
**Description:** Monitor progress toward posture goals in real-time.

**Main Flow:**
1. Access Goal Progress page.
2. See:
    - Progress bars
    - Color indicators (Red/Yellow/Green)
    - Countdown timers
    - Streak counters
3. App sends motivational notifications:
    - “Almost there”
    - Weekly summary
4. Success celebrations displayed.

**Postconditions:** Progress logged; streaks updated.



### UC-7 – Earn Rewards and Achievements
**Actor:** Suit User <br />
**Description:** User receives recognition for consistent improvement.

**Main Flow:**
1. System monitors goal completion.
2. When criteria met:
    - Assigns badges (“Posture Pioneer”, “Risk Reducer”, etc.)
    - Adds points and levels
3. If streak milestones achieved:
    - Bronze/Silver/Gold/Platinum tiers
    - Animated confetti or success message shown

**Postconditions:** Achievements saved in user profile.



### UC-8 – Calibrate the Suit
**Actor:** Suit User <br />
**Description:** Ensure suit sensors measure correctly.

**Main Flow:**
1. Start Calibration in app.
2. Follow visual step-by-step poses.
3. System validates sensor data quality.
4. Displays “Calibration successful.”

**Alternative:** Retry or factory reset if failed.

**Postconditions:** Calibration profile stored with timestamp.



### UC-9 – Monitor Battery Status
**Actor:** Suit User <br />
**Description:** Check and manage suit battery.

**Main Flow:**
1. View Battery Status in app.
2. System shows % and estimated runtime.
3. Notifications at 20 %, 10 %, 5 %.

**Postconditions**:** User reminded to recharge suit.


### UC-10 – Access Full System Information
**Actor:** Administrator <br />
**Description:** View all project and user data for monitoring.

**Main Flow:**
1. Administrator logs in with elevated permissions.
2. Accesses:
    - GitHub organization & repos
    - Project documentation
    - User activity logs
3. Can reset passwords or assist users

**Postconditions:** Administrator actions recorded in audit log.



### UC-11 – Manage User Accounts
**Actor:** Administrator <br />
**Description:** Create, modify, or deactivate accounts.

**Main Flow:**
1. Open User Management panel.
2. Add/edit/deactivate user profiles.
3. Assign roles (user/researcher/Administrator).
4. Reset passwords if required

**Postconditions:** Account changes saved in system database.


### UC-12 – Analyze Captured Data
**Actor:** Researcher <br />
**Description:** Investigate postural deviations and patterns.

**Main Flow:**
1. Researcher logs into analytics dashboard.
2. Selects dataset (time range / participants).
3. Applies filters:
    - Posture vs. time of day
    - Fatigue vs. posture quality
    - Temperature vs. physical activity
4. Exports results (CSV / JSON)

**Postconditions:** Data prepared for scientific analysis.



### UC-13 – Compare Data Across User Groups
**Actor:** Researcher <br />
**Description:** Compare posture data across demographics or professions.

**Main Flow:**
1. Select comparison parameters:
    - Profession, age, gender, injury history
2. System aggregates and contrasts datasets
3. Generates visual charts highlighting significant differences.
4. Exports automatic comparison report

**Postconditions:** Group-based analysis stored or exported.



### UC-14 – Login & Authentication
**Actor:** Suit User / Researcher / Administrator <br />
**Description:** The user securely logs into the MotionSuit application to access personalized features, data, and permissions.

**Preconditions:**
- User has a valid registered account.
- Internet connection is available.

**Main Flow:**
1. User opens the MotionSuit app or web dashboard.
2. System displays the login screen.
3. User enters credentials (email/username and password).
4. System validates the credentials in the database.
5. If authentication succeeds:
    - The system loads the appropriate dashboard based on user role (User / Researcher / Administrator).
6. Session token is generated and stored securely for the current session.


**Alternative Flows:**
- A1: Incorrect credentials → system displays error message (“Invalid username or password”).
- A2: Forgotten password → user selects “Forgot Password”, receives a reset email, and creates a new password.


**Postconditions:**
- User is logged in and has secure access to their profile and data.
- Session audit entry logged in system.

**Special Requirements:**
- Passwords must be encrypted 



### UC-15 – Generate Weekly Report
**Actor:** System and Suit User <br />
**Description:** The system automatically generates a weekly summary report of posture performance and progress for each user.

**Preconditions:**
- User has worn and synchronized MotionSuit data during the week.
- The system has access to stored posture and goal data.

**Main Flow:**
1. Every Sunday at midnight (or configurable time), the system compiles the previous week’s posture records.
2. The system calculates metrics:
    - Average daily posture quality (%)
    - Total time in risk postures
    - Number of alerts triggered
    - Goal completion rate (%)
    - Streak performance (if applicable)
3. The report is generated in PDF or web format.
4. System sends a notification to the user (“Your weekly posture summary is ready!”).
5. User opens the report in the app to review:
    - Graphs of posture improvement
    - Achievements or rewards earned

**Alternative Flows:**
- A1: If no data available → system displays message (“No data recorded for this period”).

**Postconditions:**
- Weekly report generated and stored in user history.
- Summary statistics updated in dashboards.


**Special Requirements:** 
- Reports should be exportable (PDF, CSV).
- Must support secure download (user-specific access control).
- Graphs auto-generated using data visualization library.
