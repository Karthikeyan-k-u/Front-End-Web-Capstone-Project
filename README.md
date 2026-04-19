College Bus Tracker – Real‑Time Tracking System


College Bus Tracker is a responsive, front‑end web application designed for educational institutions to monitor and manage college bus operations. It provides real‑time bus locations, detailed route information, morning pick‑up schedules, and a contact portal—all in a clean, intuitive interface.

Whether you're a student waiting for the bus, a parent checking arrival times, or a transport coordinator overseeing the fleet, this tracker delivers essential information at a glance.

📸 Preview
Home Page	Live Tracking	Routes & Schedules
https://screenshots/home.png	https://screenshots/tracking.png	https://screenshots/routes.png
Screenshots are representative – actual images may vary based on configuration.

✨ Key Features
🚀 Real‑Time Bus Tracking
Interactive map powered by Leaflet and OpenStreetMap. View all buses or filter by route. Positions update every 10 seconds (simulated).

🗺️ Comprehensive Route Directory
Browse all 12+ bus routes with first stop, timing, and driver contact details. Click any card to see full stop‑by‑stop timetable.

⏱️ Morning Pick‑up Schedules
Searchable schedule grid showing exact timings for every stop. Expand each route to see complete pickup sequence with driver and in‑charge phone numbers.

📞 Contact & Support
Dedicated contact page with helpline, email, office address, and a demo contact form (client‑side validation).

📢 Service Announcements
Homepage announcement section for delays, new buses, holiday schedules, and safety reminders.

📱 Fully Responsive
Works seamlessly on desktops, tablets, and mobile devices. Optimised layouts for all screen sizes.

🎨 Clean, Modern UI
Consistent design language across all pages with subtle shadows, rounded corners, and a professional colour palette.

🛠️ Technologies Used
Category	Technology
Frontend	HTML5, CSS3, JavaScript (ES6)
Mapping	Leaflet.js (v1.9.4)
Map Tiles	OpenStreetMap
Styling	Custom CSS with Flexbox/Grid, Google Fonts (system fallback)
Icons	Emoji + Unicode symbols (no external icon library)
Interactivity	Vanilla JavaScript (no frameworks)
📁 Project Structure
text
college-bus-tracker/
├── index.html              # Home page with hero, quick actions, announcements
├── tracking.html           # Live map tracking interface
├── routes.html             # Route cards overview
├── schedules.html          # Searchable, expandable schedule grid
├── contact.html            # Contact information + demo form
│
├── css/
│   ├── style.css           # Main stylesheet (home, general)
│   ├── contact.css         # Styles for contact page (shared across pages)
│   └── tracking.css        # Tracking‑specific styles (map, controls)
│
├── js/
│   ├── script.js           # Global navbar active state
│   ├── contact.js          # Contact form handling + tracking logic + enhancements
│   └── tracking.js         # (Referenced, same as contact.js tracking portion)
│
├── html/                   # (Optional) Contains images referenced in HTML
│   ├── ChatGPT Image ... .png   # Favicon / hero image
│   └── ...
│
└── README.md               # You are here!
Note: The project uses tracking,js (comma) in tracking.html but the actual file is tracking.js. Ensure the filename is corrected to tracking.js for proper loading.

🚀 Getting Started
Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge)

Internet connection (for Leaflet library and OpenStreetMap tiles)

Installation
Clone the repository

bash
git clone https://github.com/your-username/college-bus-tracker.git
cd college-bus-tracker
Open in browser
Simply open index.html in your browser.
No build tools, no server required – it's pure static HTML/CSS/JS.

Serve locally (optional)
Use any static server, e.g.:

bash
npx serve .
# or
python -m http.server 8000
Customisation
Routes & Timings
Edit the routesData array inside schedules.html (lines ~240-280) and the corresponding busData object in contact.js (or tracking.js) to match your actual fleet.

Map Centre & Zoom
In contact.js, inside initLiveTracking(), change the setView coordinates and zoom level:

javascript
const map = L.map('map').setView([12.9716, 77.5946], 12); // Bangalore example
Colors & Branding
Modify CSS variables in the .css files (look for #1e2b4f, #0b3d5f, etc.).

Contact Information
Update address, phone, and email in contact.html and the footer sections across all pages.

Images
Replace the placeholder images (/html/ChatGPT Image ...) with your own college bus photos.

📖 Usage Guide
Home Page (index.html)
Hero Section – College name, tagline, and "Start Tracking" button.

Quick Actions – Three large cards to jump to Live Tracking, Routes, or Schedules.

Announcements – Display important updates (edit directly in HTML).

Contact Snippet – Quick reference for transport department details.

Live Tracking (tracking.html)
Select a route from the dropdown (or "All Routes").

The map displays bus markers colour‑coded by route.

Click any marker to see bus number, speed, and route name.

Use Refresh Positions to simulate movement (or wait for auto‑update every 10s).

Legend at the bottom identifies each route colour.

⚠️ The tracking simulation uses random offsets to mimic movement. Replace the busData object with real GPS data for production use.

Routes Page (routes.html)
Displays 12 predefined routes as cards.

Each card shows: route number, first stop time, a short stop summary, driver name, and contact.

Click on a route card (visual feedback) – you can extend this to link to tracking with that route preselected.

Schedules Page (schedules.html)
Search Box – Filter routes by number or area name (e.g., "4", "NGO", "Red Hills").

Route Cards – Show first pickup, college arrival, driver, and in‑charge.

Expand/Collapse – Click "Show stops ▼" to reveal the complete timetable with every stop time.

All data is stored in a JavaScript array; easily updatable.

Contact Page (contact.html)
Two‑column layout: contact info (helpline, email, address, hours) and a message form.

Form submission is intercepted by JavaScript (demo alert) – ready to connect to a backend.

🧪 Demo Notes
Map Simulation: Bus positions are randomly shifted each refresh. For a real implementation, integrate a live GPS API or WebSocket feed.

Form Handling: The contact form currently shows a demo alert. To make it functional, add a server‑side endpoint or a service like Formspree.

Images: All image paths point to /html/.... Ensure the html folder exists at the root with the referenced PNG files, or update the src attributes.

🔮 Future Enhancements
Real GPS Integration – Connect to Firebase, MQTT, or REST API for actual bus locations.

User Authentication – Student/parent login for personalised notifications.

Push Notifications – Alert when bus is near a specific stop.

Admin Dashboard – Manage routes, schedules, and driver assignments.

Progressive Web App (PWA) – Installable on mobile devices with offline support.

Multi‑language Support – Localisation for regional languages.

Dark Mode – Toggle between light and dark themes.
