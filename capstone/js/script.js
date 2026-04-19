// Highlight the current page link in the navbar
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();