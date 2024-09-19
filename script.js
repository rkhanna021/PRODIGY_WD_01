window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#001f3f';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
  });
  
  const navLinks = document.querySelectorAll('.nav-list a');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#00ffcc';
      this.style.color = '#000';
    });
    
    link.addEventListener('mouseout', function() {
      this.style.backgroundColor = 'transparent';
      this.style.color = '#fff';
    });
  });
  
