function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Scroll animation for about section cards
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);
  
  // Observe the about containers
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.details-container');
    cards.forEach(card => {
      observer.observe(card);
    });
  });

  // Parallax scroll effect for about section photo
window.addEventListener('scroll', function() {
    const aboutPic = document.querySelector('.about-pic');
    if (aboutPic) {
      const scrolled = window.pageYOffset;
      const aboutSection = document.getElementById('about');
      const sectionTop = aboutSection.offsetTop;
      const sectionHeight = aboutSection.offsetHeight;
      
      // Only apply parallax when in view of about section
      if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
        const offset = (scrolled - sectionTop) * 0.3;
        // Clamp the offset to prevent overflow
        const maxOffset = 100; // Maximum pixels it can move
        const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, offset));
        aboutPic.style.transform = `translateY(${clampedOffset}px)`;
      } else {
        // Reset position when out of view
        aboutPic.style.transform = `translateY(0)`;
      }
    }
  });