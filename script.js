document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 24; // 24px offset
  
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });
  