/* ===========================
   Portfolio JavaScript
   =========================== */

// ---- Custom Cursor ----
(function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  // Check if touch device — disable cursor
  if ('ontouchstart' in window) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let rafId;

  // Dot follows cursor exactly (via CSS left/top)
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Move dot immediately
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  // Ring lags behind with lerp (smooth trailing effect)
  function animateRing() {
    // Lerp factor — lower = more lag
    const lerp = 0.12;
    ringX += (mouseX - ringX) * lerp;
    ringY += (mouseY - ringY) * lerp;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const interactiveSelectors = [
    'a', 'button', 'input', 'textarea', 'label',
    '.btn', '.btn-resume', '.btn-download', '.nav-link',
    '.project-card', '.cert-card', '.achievement-card',
    '.social-link', '.contact-card', '.skill-tag',
    '.back-to-top', '[role="button"]'
  ].join(',');

  document.querySelectorAll(interactiveSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  // Also use event delegation for dynamically added elements
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.add('cursor-hover');
    } else {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Click ripple
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
})();


// ---- Particle Background ----
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.05;
      this.color = Math.random() > 0.6
        ? `rgba(99, 102, 241, ${this.opacity})`
        : Math.random() > 0.5
          ? `rgba(6, 182, 212, ${this.opacity})`
          : `rgba(139, 92, 246, ${this.opacity})`;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function initParticlesArr() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    for (let i = 0; i < Math.min(count, 120); i++) {
      particles.push(new Particle());
    }
  }

  // Draw connections between close particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    animId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    initParticlesArr();
  });

  resize();
  initParticlesArr();
  animate();
})();


// ---- Typed Text Effect ----
(function initTyped() {
  const phrases = [
    'DevOps Engineer',
    'Cloud Architect',
    'CI/CD Specialist',
    'Kubernetes Expert',
    'AWS & Azure Pro',
    'Automation Engineer'
  ];
  const el = document.getElementById('typed-text');
  if (!el) return;

  let phraseIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = phrases[phraseIdx];
    if (deleting) {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
    } else {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
    }

    let delay = deleting ? 60 : 100;

    if (!deleting && charIdx === current.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 800);
})();


// ---- Navbar Scroll Effect ----
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');

  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active nav link based on scroll position
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
    const scrollY = window.scrollY + 120;

    let current = 'home';
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollY) {
        current = id;
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();


// ---- Hamburger Menu ----
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });
})();


// ---- Scroll Animations (Intersection Observer) ----
(function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger animations within a parent
        const siblings = entry.target.parentElement.querySelectorAll('[data-animate], .timeline-item, .skill-category, .cert-card, .edu-card, .project-card');
        let delay = 0;
        siblings.forEach(el => {
          if (el === entry.target) {
            setTimeout(() => el.classList.add('visible'), delay);
          }
          delay += 80;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  // Observe all animated elements
  const targets = document.querySelectorAll(
    '[data-animate], .timeline-item, .skill-category, .cert-card, .edu-card, .project-card'
  );

  targets.forEach(el => observer.observe(el));
})();


// ---- Contact Form ----
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const success = document.getElementById('form-success');
  const form = document.getElementById('contact-form');

  btn.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="animation:spin 1s linear infinite">
      <circle cx="12" cy="12" r="10" opacity="0.3"/><path d="M12 2a10 10 0 0110 10"/>
    </svg>
    <span>Sending...</span>
  `;
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = `<span>Send Message</span><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
    btn.disabled = false;
    success.classList.remove('hidden');
    form.reset();
    setTimeout(() => success.classList.add('hidden'), 5000);
  }, 1500);
}

// ---- Smooth hover tilt on cards (subtle 3D effect) ----
(function initTilt() {
  const cards = document.querySelectorAll('.project-card, .achievement-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


// Add spin keyframe dynamically
const style = document.createElement('style');
style.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(style);
