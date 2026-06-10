// Two Doctors Aquaponics — shared site behaviour

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Scroll-reveal animations
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // Track WhatsApp CTA clicks (Google Analytics, if gtag is loaded)
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: link.dataset.waLabel || link.textContent.trim(),
        });
      }
    });
  });

  // Active nav link highlight
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Floating WhatsApp button: pill label on desktop + mobile sticky bar
  const waFloat = document.querySelector('.whatsapp-float');
  if (waFloat) {
    waFloat.innerHTML = '💬<span class="wa-float-text">Book Now</span>';

    const mobileBar = document.createElement('a');
    mobileBar.className = 'mobile-wa-bar';
    mobileBar.href = waFloat.href;
    mobileBar.target = '_blank';
    mobileBar.rel = 'noopener noreferrer';
    mobileBar.setAttribute('data-wa-label', 'mobile_sticky_wa');
    mobileBar.innerHTML = '💬 &nbsp;Book on WhatsApp';
    document.body.appendChild(mobileBar);
  }
});
