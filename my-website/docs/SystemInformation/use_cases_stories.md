---
sidebar_position: 3
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

-> <u>*US-2:*</u> **As a** suit user, **I want** to check my stats on the app **so that** I can see my improvements over time.

**Acceptance Criteria:**
1. User must be logged in to the app
2. The app must have a tab where the records of the user are kept - the app must keep the records per user
3. The records tab must have graphics that show progress over time
4. Charts must show: <br />
    a. Posture trend (weekly/monthly)<br />
    b. Time in risk postures per day<br />
    c. Percentage improvement over time<br />
    d. Period filters: 7 days, 30 days, 3 months<br />
    e. Option to export data as PDF for sharing with healthcare professionals<br />


<br />

-> <u>*US-3:*</u> **As a** suit user, **I want** to check real time metrics **so that** I can see my results while I’m working.

**Acceptance Criteria:**
1. User must be logged in the app
2. The app must have a tab with the records (and dashboards, in real time)
3. Real-time metrics: <br />
    a. Heart rate <br />
    b. Current posture angles. <br />
    c. Body temperature <br />
    d. Suit battery status <br />
4. Visual status indicators: <br />
    a. Green (normal), Yellow (warning), Red (risk) <br />
5. Automatic updates every 2 seconds


<br />

-> <u>*US-4:*</u> **As a** suit user **I want** to customize my alerts **so that** I can adapt the system to my specific needs.

**Acceptance Criteria:**
1. Configure alert sensitivity (low/medium/high)
2. Choose preferred notification type (vibration/sound/visual)
3. Set quiet hours (e.g., during meetings)
4. Customize thresholds for different posture types


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
    c. Specific body part focus (neck, back, shoulders)<br />
3. Goal validation: <br />
    a. Warning for overly ambitious targets<br />
    b. Success probability indicator


<br />

-> <u>*US-6:*</u> **As a** suit user **I want** to visually track my goal progress in real-time **so that** I can stay motivated and see how close I am to achieving my targets.

**Acceptance Criteria:**
1. Real-time progress indicators:<br />
    a. Progress bars showing daily/weekly goal completion<br />
    b. Color-coded indicators (red/yellow/green) for each active goal<br />
    c. Countdown timers for time-bound goals<br />
2. Streak tracking: <br />
    a. Consecutive days meeting daily goals<br />
    b. Longest streak history<br />
3. Detailed progress analytics:<br />
    a. Comparison between set goals and actual performance<br />
4. Progress notifications:<br />
    a. "Almost there" alerts when close to achieving goals<br />
    b. Weekly progress summary reports


<br />

-> <u>*US-7:*</u> **As a** suit user **I want** to earn rewards and recognition for achieving my posture goals **so that** I stay motivated and engaged with my posture improvement journey.

**Acceptance Criteria:**
1. Badge and achievement system:<br />
    a. "Posture Pioneer" for first week of consistent good posture<br />
    b. "Risk Reducer" for significant reduction in risk postures<br />
    c. "Consistency Champion" for 30-day streaks<br />
    d. Profession-specific achievements<br />
2. Points and leveling system:<br />
    a. Points awarded for goal completion and streak maintenance<br />
    b. Level progression with visual status indicators<br />
3. Visual celebrations:<br />
    a. Animated confetti and success messages for goal completion<br />
4. Reward tiers:<br />
    a. Bronze/Silver/Gold/Platinum levels based on consistency<br />
    b. Special rewards for maintaining goals over 3, 6, 12 months<br />
    c. "Posture Master" status for exceptional long-term improvement


<br />

-> <u>*US-8:*</u> **As a** suit user **I want** to easily calibrate my suit **so that** I can ensure accurate measurements and reliable posture detection.

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


<br />

-> <u>*US-9:*</u> **As a** suit user **I want** to monitor battery status **so that** I can plan my usage and avoid interruptions during important activities.

**Acceptance Criteria:**
1. Comprehensive battery monitoring:<br />
    a. Real-time battery percentage display<br />
2. Smart battery notifications:<br />
    a. Low battery warnings (20%, 10%, 5%)



<br />

### Administration

-> <u>*US-10:*</u> **As an** administrator **I want** to have access to all the information **so that** I can help and monitor the students' work.

**Acceptance Criteria:**
1. Full access to GitHub organization (all repositories)
2. Access to all project documentation
3. Administrator permissions in all systems
4. Activity logs for all users
5. Ability to reset passwords and manage accounts


<br />

-> <u>*US-11:*</u> **As an** administrator **I want** to manage user accounts so that I can control access and provide support.

**Acceptance Criteria:**
1. Create, edit, and deactivate user accounts
2. Assign different profiles (user/researcher/admin)
3. Password reset when needed
4. View usage statistics per user


<br />


### Research

-> <u>*US-12:*</u> **As a** researcher **I want** to analyze the captured data **so that** I can identify postural deviations and abnormal patterns.

**Acceptance Criteria:**
1. Read-only access to complete database
2. Advanced query and filtering tools
3. Data export in formats:<br />
    a. CSV for statistical analysis<br />
    b. JSON for additional processing<br />
4. Ability to correlate multiple variables:<br />
    a. Posture vs. time of day<br />
    b. Fatigue vs. postural quality<br />
    c. Temperature vs. physical activity


<br />

-> <u>*US-13:*</u> **As a** researcher **I want** to compare data between different user groups **so that** I can identify demographic and occupational patterns.

**Acceptance Criteria:**
1. Group users by:<br />
    a. Profession (factory/construction/office etc)<br />
    b. Age and gender<br />
    c. Injury history<br />
2. Comparative statistical analysis between groups
3. Visualization of significant differences
4. Automatic comparison reports


<!-- r -->
