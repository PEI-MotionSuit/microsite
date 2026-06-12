---
sidebar_position: 6
---

# User Stories

The main actors are the **suit users**, the **administrators** and the **researchers** so we divided the user stories by the actors and each user story will have it's acceptance criteria.

### Suit Users
-> <u>*US-1:*</u> **As a** suit user, **I want** to receive alerts about my posture **so that** I can prevent injuries in the future.

**Acceptance Criteria:**
1. User must be wearing a suit and have it properly calibrated
2. User must be logged in to the app
3. User must connect the suit to his account
4. The app should analyse the data collected from the suit 
5. The app should alert the user if the posture is not correct
6. System must analyze movement data in real-time
7. The app should alert the user if the posture is not correct. It must be triggered when: <br />
   a. Incorrect posture maintained for >30 seconds <br />
   b. Joint angles exceed safe limits <br />
   c. Risk movement pattern is detected <br />
8.  Multiple alert types available: <br />
    a. In-app notification <br />
    b. Sound alert (optional) <br />


<br />

-> <u>*US-2:*</u> **As a** suit user, **I want** to have access my complete session history on the app **so that** I can see my improvements over time.

**Acceptance Criteria:**
1. User must be logged in to the app
2. The app must have a tab where all user sessions are listed, the app must keep the sessions per user
3. Option to export data: <br />
    a. Period filters: 7 days, 30 days, 90 days<br />
    b. Export data as PDF, CSV and JSON for sharing with healthcare professionals<br />


<br />

-> <u>*US-3:*</u> **As a** suit user, **I want** to check real time metrics **so that** I can see my results while I’m working.

**Acceptance Criteria:**
1. User must be logged in the app
2. The dashboard displays a real-time 3D model that reproduces the user’s movements based on colected data.
3. Real-time metrics: <br />
    a. Current REBA/ROSA score <br />
4. Automatic updates in real-time


<br />

-> <u>*US-4:*</u> **As a** suit user **I want** to customize my alerts **so that** I can adapt the system to my specific needs.

**Acceptance Criteria:**
1. Choose preferred notification type (vibration/sound/visual)
2. Set quiet hours (e.g., during meetings)


<br />

-> <u>*US-5:*</u> **As a** suit user **I want** to set personalized posture improvement goals **so that** I can have clear targets to work towards and measure my progress.

**Acceptance Criteria:**
1. Users can create daily/weekly goals with specific targets: <br />
    a. Maximum time allowed in risk postures (e.g. "less than 30 minutes per day")<br />
    b. Target for "good posture" minutes (e.g. "at least 4 hours of good posture daily")<br />
    c. Reduction goals for specific risk patterns (e.g. "reduce forward neck bending by 20%")<br />
2. Goal customization options: <br />
    a. Adjustable difficulty levels (beginner/intermediate/advanced)<br />
    b. Time-bound goals (daily, weekly, or custom periods)<br />
3. Goal validation: <br />
    a. Warning for overly ambitious targets<br />


<br />

-> <u>*US-6:*</u> **As a** suit user **I want** to visually track my goal progress in real-time **so that** I can stay motivated and see how close I am to achieving my targets.

**Acceptance Criteria:**
1. Real-time progress indicators:<br />
    a. Progress bars showing daily/weekly goal completion<br />
    b. Countdown timers for time-bound goals<br />
2. Streak tracking: <br />
    a. Consecutive days meeting daily goals<br />
    b. Longest streak history<br />
3. Detailed progress analytics:<br />
    a. Comparison between set goals and actual performance<br />
4. Progress notifications:<br />
    a. "Almost there" alerts when close to achieving goals<br />
    b. Weekly progress summary reports


<br />

-> <u>*US-7:*</u> **As a** suit user **I want** to easily calibrate my suit **so that** I can ensure accurate measurements and reliable posture detection.

**Acceptance Criteria:**
1. Simple calibration initiation:<br />
    a. One-touch calibration start from mobile app<br />
    b. Clear visual instructions for calibration poses<br />
    c. Progress indicator during calibration process<br />
2. Calibration feedback and validation:<br />
    a. Real-time sensor data quality indicators<br />
    b. Success confirmation <br />
3. Calibration management:<br />
    a. Calibration history and timestamps<br />
    b. Automatic calibration reminders (suggested every 2 weeks)<br />
    c. Factory reset option for calibration data<br />

-> <u>*US-8:*</u> **As a** suit user **I want** to earn rewards and recognition for achieving my posture goals **so that** I stay motivated and engaged with my posture improvement journey.

**Acceptance Criteria:**
1. Badge and achievement system:<br />
    a. "Posture Pioneer" for first week of consistent good posture<br />
    b. "Risk Reducer" for significant reduction in risk postures<br />
    c. "Consistency Champion" for 30-day streaks<br />
    d. Profession-specific achievements<br />
2. Points and leveling system:<br />
    a. Points awarded for goal completion and streak maintenance<br />
    b. Level progression with visual status indicators<br />
3. Reward tiers:<br />
    a. Levels increasing based on consistency<br />
    b. Special rewards for maintaining goals over 3, 6, 12 months<br />
    c. "Posture Master" status for exceptional long-term improvement


<br />

### Administration

-> <u>*US-9:*</u> **As an** administrator **I want** to manage user accounts **so that** I can control access and provide support.

**Acceptance Criteria:**
1. View user's details and deactivate user accounts
2. Access all user's sessions history
3. Approve and reject researcher's acoounts
4. View usage statistics per user


<br />

-> <u>*US-10:*</u> **As an** administrator **I want** to view real‑time system statistics **so that** I can monitor the platform’s health and usage.

**Acceptance Criteria:**
1. View system metrics (total users, active users, suit usage)
2. View API health metrics
3. View user's database storage status
4. Download a full database dump (CSV, JSON, PDF)
5. Export all raw sensor logs and complete session histories (CSV, JSON, PDF)


<br />


### Research

-> <u>*US-11:*</u> **As a** researcher **I want** to analyze the captured data **so that** I can identify postural deviations and abnormal patterns.

**Acceptance Criteria:**
1. Read-only access to the information of users who have authorized it 
2. Advanced query and filtering tools
3. Data export in formats:<br />
    a. CSV for statistical analysis<br />
    b. JSON for additional processing<br />
    c. PDF for better visual <br />


<br />

-> <u>*US-12:*</u> **As a** researcher **I want** to compare data between different user groups **so that** I can identify demographic and occupational patterns.

**Acceptance Criteria:**
1. Group users by:<br />
    a. Profession (factory/construction/office etc)<br />
    b. Age and gender<br />
2. Export the data of the user group


-> <u>*US-13:*</u> **As a** researcher **I want** to manage experimental studies **so that** I can organize participants into specific study groups.

**Acceptance Criteria:**
1. Create new studies defining:
    a. Title and description
    b. Start and end dates
    c. Target participant count
2. Assign or remove participants to/from active studies.
3. Update the lifecycle status of the study (Planning, In Progress, Completed)


-> <u>*US-14:*</u> **As a** researcher **I want** to visually explore the aggregated biomechanical data **so that** I can easily identify trends, correlations, and anomalies.

**Acceptance Criteria:**
1. View interactive charts illustrating key metrics (e.g., posture scores over time, alert frequency heatmaps)
2. Filter the visual analysis to show either the global participant pool or a specific experimental study
3. Dynamically group the visualized data by different demographic variables (e.g., profession, age).
4. Export the specific data subset currently represented in the charts


-> <u>*US-15:*</u> **As a** researcher **I want** to export specific subsets of captured data **so that** I can download them for external analysis.

**Acceptance Criteria:**
1. Select the specific data scope for export (e.g., individual session data, raw user data, full system data, or filtered user groups)
2. Filter the exported data by predefined timeframes (last 7 days, last 30 days, or all time)
3. Choose the exported file format between CSV, JSON, or PDF


<!-- r -->
