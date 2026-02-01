/* ==========================================================================
   MAIN - App Initialization
   ========================================================================== */

const App = {
  init() {
    // Check if returning from legal page (skip preloader)
    const fromLegal = sessionStorage.getItem('norex-from-legal');
    if (fromLegal) {
      sessionStorage.removeItem('norex-from-legal');
      this.skipPreloader();
    } else {
      this.initPreloader();
    }
  },

  skipPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.display = 'none';
    }
    document.querySelector('main').classList.add('loaded');
    this.initModules();
  },

  initPreloader() {
    const preloader = document.getElementById('preloader');
    const progress = Utils.$('.preloader__progress');
    const text = Utils.$('.preloader__text');

    const steps = [10, 30, 55, 75, 90, 100];
    let i = 0;

    const updateProgress = () => {
      if (i < steps.length) {
        const value = steps[i];
        progress.style.width = value + '%';
        preloader.setAttribute('aria-valuenow', value);

        if (value === 100) {
          text.textContent = 'READY';
        }

        i++;
        setTimeout(updateProgress, 150 + Math.random() * 100);
      } else {
        // Loading complete
        setTimeout(() => {
          preloader.classList.add('done');
          document.querySelector('main').classList.add('loaded');

          // Initialize all modules after preloader
          this.initModules();
        }, 400);
      }
    };

    setTimeout(updateProgress, 200);
  },

  initModules() {
    // Initialize all modules
    i18n.init();
    Particles.init();
    Terminal.init();
    Navigation.init();
    Animations.init();
    this.initContactForm();
    this.initCookieBanner();

    // Log ready state
    console.log('%c NOREX ', 'background: #C9A87C; color: #0A0A0B; font-weight: bold; padding: 4px 8px;', 'System ready.');
  },

  initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');

    if (!banner || !acceptBtn) return;

    // Check if user already accepted
    const accepted = localStorage.getItem('norex-cookies-accepted');

    if (!accepted) {
      // Show banner after a short delay
      setTimeout(() => {
        banner.classList.add('active');
        banner.setAttribute('aria-hidden', 'false');
      }, 1500);
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('norex-cookies-accepted', 'true');
      banner.classList.remove('active');
      banner.setAttribute('aria-hidden', 'true');
      Sound.play('click');
    });
  },

  initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const status = document.getElementById('contact-status');
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Basic validation
      if (!data.name || !data.email || !data.subject || !data.message) {
        status.textContent = 'Please fill in all fields.';
        status.className = 'small text-dim contact-status error';
        Sound.play('error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        status.textContent = 'Please enter a valid email address.';
        status.className = 'small text-dim contact-status error';
        Sound.play('error');
        return;
      }

      // Simulate form submission (replace with actual endpoint)
      status.textContent = 'Sending...';
      status.className = 'small text-dim contact-status';

      // Simulate network delay
      setTimeout(() => {
        // In production, send to backend/email service
        // For now, show success and create mailto link
        const subject = encodeURIComponent(`[NOREX] ${data.subject}: ${data.name}`);
        const body = encodeURIComponent(`From: ${data.name} (${data.email})\n\nMessage:\n${data.message}`);

        status.textContent = 'Message prepared! Click below to send via email.';
        status.className = 'small text-dim contact-status success';
        status.innerHTML = `
          <a href="mailto:contact@norex.dev?subject=${subject}&body=${body}" class="link-hover accent">
            Open in email client →
          </a>
        `;

        Sound.play('success');
        form.reset();
      }, 800);
    });
  }
};

// Start the app
Utils.ready(() => App.init());
