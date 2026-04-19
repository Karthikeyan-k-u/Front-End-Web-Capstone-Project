(function() {
  'use strict';

  // ---------- 1. Highlight current page in navigation ----------
  function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // ---------- 2. Live Tracking (only on tracking page) ----------
  function initLiveTracking() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    const map = L.map('map').setView([28.6139, 77.2090], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const busData = {
      '17': { name: 'Route 17 - City Centre', color: '#2563eb', positions: [[28.6139, 77.2090], [28.6210, 77.2150], [28.6050, 77.1950]] },
      '42': { name: 'Route 42 - Airport Express', color: '#dc2626', positions: [[28.6300, 77.2200], [28.6100, 77.2300], [28.5950, 77.2500]] },
      '5': { name: 'Route 5 - Suburb Link', color: '#16a34a', positions: [[28.6000, 77.1800], [28.5900, 77.2000], [28.6100, 77.2100]] }
    };

    let markers = [];
    const routeSelect = document.getElementById('routeSelect');
    const refreshBtn = document.getElementById('refreshBtn');
    const lastUpdateSpan = document.getElementById('lastUpdate');

    function updateMap(selectedRoute) {
      markers.forEach(m => map.removeLayer(m));
      markers = [];
      const routesToShow = selectedRoute === 'all' ? Object.keys(busData) : [selectedRoute];

      routesToShow.forEach(routeId => {
        const route = busData[routeId];
        if (!route) return;
        route.positions.forEach((pos, index) => {
          const marker = L.marker(pos, {
            icon: L.divIcon({
              className: 'bus-marker',
              html: `<div style="background:${route.color}; width:28px; height:28px; border-radius:50%; border:3px solid white; box-shadow:0 2px 8px rgba(0,0,0,0.2); display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:12px;">${routeId}</div>`,
              iconSize: [28, 28],
              iconAnchor: [14, 14],
              popupAnchor: [0, -14]
            })
          }).bindPopup(`<b>${route.name}</b><br>Bus #${index + 1}<br>🚦 Speed: ${Math.floor(Math.random() * 20 + 20)} km/h`);
          marker.addTo(map);
          markers.push(marker);
        });
      });
      lastUpdateSpan.textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
    }

    function simulateMovement() {
      Object.keys(busData).forEach(routeId => {
        busData[routeId].positions = busData[routeId].positions.map(pos => [
          pos[0] + (Math.random() - 0.5) * 0.008,
          pos[1] + (Math.random() - 0.5) * 0.008
        ]);
      });
    }

    function refreshMap() {
      simulateMovement();
      updateMap(routeSelect.value);
    }

    routeSelect.addEventListener('change', e => updateMap(e.target.value));
    refreshBtn.addEventListener('click', refreshMap);
    updateMap('all');

    const intervalId = setInterval(() => {
      if (document.visibilityState === 'visible') refreshMap();
    }, 10000);
    window.addEventListener('beforeunload', () => clearInterval(intervalId));
  }

  // ---------- 3. Enhance Route Cards (routes page) ----------
  function enhanceRouteCards() {
    document.querySelectorAll('.route-card').forEach(card => {
      card.addEventListener('click', function() {
        const routeName = this.querySelector('h2')?.innerText || 'this route';
        console.log(`🚌 Route card clicked: ${routeName}`);
        this.style.transition = 'background 0.15s';
        this.style.backgroundColor = '#f0f7ff';
        setTimeout(() => this.style.backgroundColor = '', 120);
      });
    });
  }

  // ---------- 4. Schedule Table Interactions ----------
  function enhanceScheduleTable() {
    const table = document.querySelector('.schedule-table');
    if (!table) return;

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      row.addEventListener('click', function() {
        const routeCell = this.cells[0];
        const routeName = routeCell ? routeCell.textContent.trim() : 'this route';
        console.log(`📅 Schedule row clicked: ${routeName}`);
        this.style.transition = 'background 0.15s';
        this.style.backgroundColor = '#e6f0fa';
        setTimeout(() => this.style.backgroundColor = '', 150);
      });
      row.style.cursor = 'pointer';
      row.setAttribute('title', 'Click to view route details (simulated)');
    });
  }

  // ---------- 5. Contact Form Demo (NEW) ----------
  function initContactForm() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();  // Prevent actual submission

      // Get form values
      const name = form.querySelector('input[name="name"]')?.value || '';
      const email = form.querySelector('input[name="email"]')?.value || '';
      
      // Demo feedback
      alert(`📬 Thank you, ${name || 'valued user'}!\n\n(Email: ${email || 'not provided'})`);
      
      // Optionally reset form (commented out to preserve input for demo clarity)
      // form.reset();
      
      // Visual feedback on button
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sent (Demo)';
      setTimeout(() => btn.textContent = 'Submit', 2000);
    });
  }

  // ---------- 6. Initialize on DOM ready ----------
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    initLiveTracking();
    enhanceRouteCards();
    enhanceScheduleTable();
    initContactForm();
  });

})();