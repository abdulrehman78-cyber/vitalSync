# VitalSync | Patient Health Tracker v1.0

**VitalSync** is a front-end web application designed to bridge the gap between patient self-monitoring and clinical oversight. Built with a focus on real-time data persistence and triage logic, it allows patients to log vitals while providing doctors with a prioritized view of high-risk cases.

## 🚀 Key Features

### 1. Patient Dashboard
*   **Real-time Logging:** Log Heart Rate and Blood Pressure via a modal interface.
*   **Instant Health Assessment:** Automated status calculation based on medical thresholds.
*   **Dynamic Analytics:** Top-level cards provide a snapshot of latest readings.
*   **Local Persistence:** Uses `localStorage` to ensure data remains available across browser sessions.

### 2. Doctor’s Triage View
*   **Automated Triage Sorting:** Urgent records are automatically bubbled to the top.
*   **Visual Indicators:** High-risk rows are highlighted in red for immediate attention.
*   **Record Management:** Ability to dismiss/clear records once reviewed.

### 3. User Experience
*   **Dual Themes:** Fully responsive Dark/Light mode toggle.
*   **Responsive Design:** Built with **Bootstrap 5.3** for mobile and desktop compatibility.

## 🛠️ Technical Stack
*   **Frontend:** HTML5, CSS3, JS (ES6+)
*   **UI Framework:** Bootstrap 5.3
*   **Storage:** Web Storage API (localStorage)

## 📂 Project Structure
\`\`\`text
VitalSync/
├── index.html          # Patient Dashboard
├── doctor.html         # Medical Professional View
├── README.md           # Documentation
├── assets/
│   ├── css/
│   │   └── style.css   
│   └── js/
│       ├── common.js   # Shared logic (Theme toggle)
│       ├── home.js     # Patient-side form logic
│       └── doctor.js   # Triage & admin management
\`\`\`

## 🩺 Medical Logic
*   **Normal:** Heart Rate (60–100 bpm) AND BP (Systolic ≤ 120 / Diastolic ≤ 80).
*   **Consult A Doctor:** Triggered if any value falls outside the normal range.

---
**Developed as a 6th Semester Web Development Project.**
## Open using this link
* **https://abdulrehman78-cyber.github.io/vitalSync/**