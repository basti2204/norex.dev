/* ==========================================================================
   ANIMATIONS
   ========================================================================== */

const Animations = {
  observers: [],

  init() {
    this.initRevealAnimations();
    this.initCursor();
    this.initGlow();
    this.initCardHovers();
  },

  initRevealAnimations() {
    const reveals = Utils.$$('.reveal, .reveal--left, .reveal--right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
    this.observers.push(observer);
  },

  resetReveals() {
    // Reset all reveal elements for current page
    const currentPage = document.querySelector('.page--active');
    if (!currentPage) return;

    const reveals = Utils.$$('.reveal, .reveal--left, .reveal--right', currentPage);
    
    // Remove visible class
    reveals.forEach(el => el.classList.remove('visible'));

    // Re-observe after a short delay
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      reveals.forEach(el => observer.observe(el));
    }, 100);
  },

  initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    // Check for touch device
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      return;
    }

    let scrollY = 0;

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = (e.clientX - 10) + 'px';
      cursor.style.top = (e.clientY - 10) + 'px';
      cursor.style.opacity = '0.6';
    }, { passive: true });

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      cursor.style.transform = `rotate(${scrollY * 0.1}deg)`;
    }, { passive: true });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '0.6';
    });
  },

  initGlow() {
    const glow = document.getElementById('glow');
    if (!glow) return;

    // Check for touch device
    if ('ontouchstart' in window) {
      glow.style.display = 'none';
      return;
    }

    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  },

  initCardHovers() {
    const cards = Utils.$$('.card, .inventory__row');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        Sound.play('hover');
      });
    });
  }
};

window.Animations = Animations;
