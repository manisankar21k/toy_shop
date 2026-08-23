/* ==========================================================================
   Toy Planet — Scripts
   ========================================================================== */


document.addEventListener('DOMContentLoaded', () => {

  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 400);
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    backToTop.classList.toggle('show', window.scrollY > 500);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = `${(window.scrollY / docHeight) * 100}%`;
  });

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  /* ---------- Active link highlight on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  const navIndicator = document.getElementById('navIndicator');

  function moveIndicatorTo(link) {
    if (!link) { navIndicator.classList.remove('show'); return; }
    navIndicator.style.left = `${link.offsetLeft}px`;
    navIndicator.style.width = `${link.offsetWidth}px`;
    navIndicator.classList.add('show');
  }

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navItems.forEach(item => {
      const isActive = item.getAttribute('href') === `#${current}`;
      item.classList.toggle('active', isActive);
      if (isActive) moveIndicatorTo(item);
    });
  });

  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => moveIndicatorTo(item));
  });
  document.getElementById('navLinks').addEventListener('mouseleave', () => {
    const active = document.querySelector('.nav-link.active');
    moveIndicatorTo(active);
  });
  window.addEventListener('load', () => moveIndicatorTo(document.querySelector('.nav-link.active')));

  /* ---------- Scroll reveal animation ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('active'), i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Counter animation ---------- */
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      const duration = 1600;
      const startTime = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(animate);
        else el.textContent = target;
      };
      requestAnimationFrame(animate);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Hero floating particles ---------- */
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('span');
    const size = Math.random() * 6 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDuration = `${Math.random() * 8 + 8}s`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(p);
  }

  /* ---------- Testimonial slider ---------- */
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  const testimonialPrev = document.getElementById('testimonialPrev');
  const testimonialNext = document.getElementById('testimonialNext');
  const cards = track.children;
  let current = 0;
  let testimonialTimer;

  for (let i = 0; i < cards.length; i++) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  }

  function goToSlide(index) {
    current = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dotsWrap.children].forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function advanceTestimonials() {
    current = (current + 1) % cards.length;
    goToSlide(current);
  }

  function startTestimonials() {
    clearInterval(testimonialTimer);
    testimonialTimer = setInterval(advanceTestimonials, 5000);
  }

  testimonialPrev.addEventListener('click', () => {
    goToSlide((current - 1 + cards.length) % cards.length);
    startTestimonials();
  });
  testimonialNext.addEventListener('click', () => {
    advanceTestimonials();
    startTestimonials();
  });
  track.closest('.testimonial-slider').addEventListener('mouseenter', () => clearInterval(testimonialTimer));
  track.closest('.testimonial-slider').addEventListener('mouseleave', startTestimonials);
  startTestimonials();

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Contact form (front-end only) ---------- */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.classList.add('show');
    launchConfetti();
    form.reset();
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  });

  /* ---------- Custom cursor ---------- */
  if (!isTouch && !prefersReducedMotion) {
    document.body.classList.add('has-custom-cursor');
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    const cursorLabel = document.getElementById('cursorLabel');
    let ringX = -100, ringY = -100, dotX = -100, dotY = -100;

    window.addEventListener('mousemove', (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
    }, { passive: true });
    const animateCursor = () => {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    document.addEventListener('mousedown', () => cursorRing.classList.add('clicked'));
    document.addEventListener('mouseup', () => cursorRing.classList.remove('clicked'));

    document.querySelectorAll('a, button, input, textarea, .product-card, .why-card, .about-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovered');
        cursorDot.classList.add('shrink');
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovered');
        cursorDot.classList.remove('shrink');
      });
    });

    document.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovered', 'viewing');
        cursorDot.classList.add('shrink');
        cursorLabel.textContent = 'View';
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovered', 'viewing');
        cursorDot.classList.remove('shrink');
        cursorLabel.textContent = '';
      });
    });
  }

  /* ---------- Button ripple effect ---------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* ---------- 3D tilt effect on cards ---------- */
  if (!isTouch && !prefersReducedMotion) {
    document.querySelectorAll('.product-card, .gallery-item, .why-card, .about-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -12;
        const rotateY = ((x / rect.width) - 0.5) * 12;
        card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ---------- Hero depth and magnetic actions ---------- */
  if (!isTouch && !prefersReducedMotion) {
    const hero = document.querySelector('.hero');

    hero.addEventListener('pointermove', (e) => {
      const bounds = hero.getBoundingClientRect();
      const offsetX = (e.clientX - bounds.left) / bounds.width - 0.5;
      const offsetY = (e.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty('--hero-shift-x', `${offsetX * 14}px`);
      hero.style.setProperty('--hero-shift-y', `${offsetY * 10}px`);
    }, { passive: true });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--hero-shift-x', '0px');
      hero.style.setProperty('--hero-shift-y', '0px');
    });

    document.querySelectorAll('.hero-buttons .btn, .nav-cta').forEach(button => {
      button.classList.add('magnetic');
      button.addEventListener('pointermove', (e) => {
        const bounds = button.getBoundingClientRect();
        const offsetX = (e.clientX - bounds.left) / bounds.width - 0.5;
        const offsetY = (e.clientY - bounds.top) / bounds.height - 0.5;
        button.style.setProperty('--magnetic-x', `${offsetX * 10}px`);
        button.style.setProperty('--magnetic-y', `${offsetY * 8}px`);
      }, { passive: true });
      button.addEventListener('pointerleave', () => {
        button.style.setProperty('--magnetic-x', '0px');
        button.style.setProperty('--magnetic-y', '0px');
      });
    });
  }

  /* ---------- Hero title word-split animation ---------- */
  document.querySelectorAll('.hero-title .line').forEach(line => {
    const isGradient = line.classList.contains('gradient-text');
    const words = line.textContent.trim().split(' ');
    line.innerHTML = words
      .map((word, i) => `<span class="word${isGradient ? ' gradient-text' : ''}" style="animation-delay:${0.5 + i * 0.09}s">${word}</span>`)
      .join(' ');
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  let lastGalleryTrigger = null;

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lastGalleryTrigger?.focus();
  }

  document.querySelectorAll('[data-gallery-src]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      lastGalleryTrigger = trigger;
      lightboxImage.src = trigger.dataset.gallerySrc;
      lightboxImage.alt = trigger.querySelector('img').alt;
      lightboxCaption.textContent = trigger.dataset.galleryCaption;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      setTimeout(() => lightboxClose.focus(), 120);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });

  /* ---------- Confetti burst ---------- */
  function launchConfetti() {
    const colors = ['#1f3a7a', '#c9a66b', '#3a63c0', '#dabf8e', '#0a1128'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.animationDuration = `${Math.random() * 1.5 + 1.8}s`;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 3500);
    }
  }

});

