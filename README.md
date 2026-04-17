# Capstone Project
A responsive, real‑time bus tracking web application for **Dr. K Vasudevan College of Engineering and Technology** (Chennai). Track college buses, view routes and schedules, and stay updated with service announcements – all in one place.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white)


## ✨ Features

- **Live Bus Tracking** – Interactive map with simulated bus positions (updates every 10 seconds).
- **Route Directory** – All 12+ routes with start points, major stops, and driver contact.
- **Detailed Schedules** – Searchable, expandable timetables for every route.
- **Service Announcements** – Latest updates on delays, new buses, and holidays.
- **Contact Form** – Send messages to the transport department (demo alert).
- **Fully Responsive** – Works on desktop, tablet, and mobile.
- **Zero Dependencies** – Only Leaflet for maps; everything else is vanilla.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Maps**: [Leaflet](https://leafletjs.com/) + OpenStreetMap tiles
- **Icons**: Emojis / system fonts
- **Deployment**: Static hosting (Netlify, Vercel, GitHub Pages)

## 📁 Project Structure
college-bus-tracker/
├── index.html # Homepage
├── routes.html # All bus routes
├── schedules.html # Interactive schedule grid
├── tracking.html # Live map with bus markers
├── contact.html # Contact page with form
├── css/
│ ├── style.css # Global styles (home, routes, schedules)
│ ├── tracking.css # Tracking page specific styles
│ └── contact.css # Contact page specific styles
├── js/
│ ├── script.js # Shared navigation & interactions
│ └── tracking.js # Map initialization & simulation
└── html/ # (Images, favicon, etc.)
├── ChatGPT Image Apr 15, 2026, 03_02_55 PM.png # Favicon
└── ChatGPT Image Apr 16, 2026, 09_17_35 PM.png # Hero image

text

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/college-bus-tracker.git
cd college-bus-tracker
2. Open in browser
Simply open index.html in your preferred browser. No server required.

3. (Optional) Serve locally
If you have Python installed:

🧭 Usage
For Students / Staff
Home: Quick access to tracking, routes, schedules, and announcements.

Live Tracking: Select a route from the dropdown to see only those buses. Click markers for bus details.

Routes: Browse all available bus routes and their major stops.

Schedules: Search for a route, then expand to see the full stop‑by‑stop timetable with pickup times and driver contact.

Contact: View department info or send a message (demo).

For Developers
Modify bus data: All route information is stored in JavaScript objects inside schedules.html and tracking.js. Update them to match your actual fleet.

Change map center: Edit the setView coordinates in tracking.js (line ~30).

Styling: Adjust CSS variables or override classes in the respective .css files.

⚙️ Customization
What to change	Where to change
College name / branding	index.html (hero text), header logo in all pages
Bus routes & schedules	routes.html (hard‑coded cards), schedules.html (JavaScript routesData array)
Map default location	tracking.js → map.setView([12.93, 80.14], 12)
Announcements	index.html → <section class="announcement">
Contact information	contact.html and index.html contact section
📌 Notes
The live tracking simulation is purely for demonstration. Real‑time GPS integration would require a backend service and WebSocket / Firebase connection.

Driver phone numbers shown are fictional and for example purposes only.

The project uses two tile layers (OSM and CartoDB) as fallback in case one fails.

🔮 Future Enhancements
Connect to a real‑time bus location API

Add user geolocation to show nearest stop

Display route paths on the map (polylines)

Implement a proper backend with database for schedules and feedback

Add PWA support for offline access

Dark mode toggle


## ✅ Summary

The **College Bus Tracker** is a polished, ready‑to‑deploy front‑end project that demonstrates real‑time simulation, responsive design, and clean code organisation. The provided `README.md` gives a complete overview and instructions for anyone cloning the repository.
