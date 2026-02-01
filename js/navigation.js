/* ==========================================================================
   NAVIGATION
   ========================================================================== */

const Navigation = {
  currentPage: 'home',
  transitioning: false,
  nav: null,
  mobileMenu: null,
  menuToggle: null,

  init() {
    this.nav = document.getElementById('nav');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.menuToggle = document.getElementById('menu-toggle');

    this.bindNavLinks();
    this.bindMenuToggle();
    this.bindScroll();
    this.bindThemeToggle();
    this.bindSoundToggle();
    this.bindLangToggle();
    this.bindLegalLinks();
  },

  bindNavLinks() {
    const links = Utils.$$('[data-nav]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.nav;
        this.navigateTo(page);
      });

      // Sound on hover
      link.addEventListener('mouseenter', () => {
        Sound.play('hover');
      });
    });
  },

  bindMenuToggle() {
    if (!this.menuToggle) return;

    this.menuToggle.addEventListener('click', () => {
      this.toggleMobileMenu();
      Sound.play('click');
    });
  },

  bindScroll() {
    let lastScroll = 0;

    window.addEventListener('scroll', Utils.throttle(() => {
      const scrollY = window.scrollY;

      // Add/remove scrolled class
      if (scrollY > 50) {
        this.nav.classList.add('scrolled');
      } else {
        this.nav.classList.remove('scrolled');
      }

      // Hide/show on scroll
      if (scrollY > 100 && scrollY < 400 && scrollY > lastScroll) {
        this.nav.classList.add('hidden');
      } else {
        this.nav.classList.remove('hidden');
      }

      lastScroll = scrollY;
    }, 100), { passive: true });
  },

  bindThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('norex-theme');
    if (savedTheme) {
      document.body.dataset.theme = savedTheme;
    }

    toggle.addEventListener('click', () => {
      const body = document.body;
      const current = body.dataset.theme;
      const next = current === 'dark' ? 'light' : 'dark';

      body.dataset.theme = next;

      // Save to localStorage
      localStorage.setItem('norex-theme', next);

      Sound.play('click');
    });
  },

  bindSoundToggle() {
    const toggle = document.getElementById('sound-toggle');
    if (!toggle) return;

    // Load saved sound preference from localStorage
    const savedSound = localStorage.getItem('norex-sound');
    if (savedSound === 'enabled') {
      Sound.init();
      Sound.enabled = true;
      document.body.dataset.sound = 'on';
    } else {
      document.body.dataset.sound = 'off';
    }

    toggle.addEventListener('click', () => {
      const enabled = Sound.toggle();

      // Update body data attribute for CSS
      document.body.dataset.sound = enabled ? 'on' : 'off';

      // Save to localStorage
      localStorage.setItem('norex-sound', enabled ? 'enabled' : 'disabled');

      if (enabled) Sound.play('click');
    });
  },

  bindLangToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      i18n.toggle();
      Sound.play('click');
    });
  },

  bindLegalLinks() {
    const legalLinks = [
      document.getElementById('footer-imprint'),
      document.getElementById('footer-privacy'),
      document.getElementById('cookie-privacy-link')
    ].filter(Boolean);

    legalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.href;
        this.navigateToExternal(href);
      });
    });
  },

  navigateToExternal(url) {
    if (this.transitioning) return;

    this.transitioning = true;
    Sound.play('whoosh');

    // Trigger page wipe animation
    const wipe = document.getElementById('page-wipe');
    wipe.classList.add('active');

    setTimeout(() => {
      // Set flag so preloader is skipped on return
      sessionStorage.setItem('norex-from-legal', 'true');
      // Navigate to the external page
      window.location.href = url;
    }, 500);
  },

  navigateTo(page) {
    if (page === this.currentPage || this.transitioning) return;

    this.transitioning = true;
    Sound.play('whoosh');

    // Close mobile menu if open
    this.closeMobileMenu();

    // Trigger page wipe animation
    const wipe = document.getElementById('page-wipe');
    wipe.classList.add('active');

    setTimeout(() => {
      // Hide current page
      const currentEl = document.getElementById(`page-${this.currentPage}`);
      if (currentEl) currentEl.classList.remove('page--active');

      // Show new page
      const newEl = document.getElementById(`page-${page}`);
      if (newEl) newEl.classList.add('page--active');

      // Update nav links
      this.updateActiveLinks(page);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Re-trigger reveal animations
      Animations.resetReveals();

      this.currentPage = page;

      setTimeout(() => {
        wipe.classList.remove('active');
        this.transitioning = false;
      }, 50);
    }, 500);
  },

  updateActiveLinks(page) {
    // Desktop nav
    Utils.$$('.nav__link').forEach(link => {
      link.classList.toggle('active', link.dataset.nav === page);
    });

    // Mobile menu
    Utils.$$('.mobile-menu__link').forEach(link => {
      link.classList.toggle('active', link.dataset.nav === page);
    });
  },

  toggleMobileMenu() {
    const isOpen = this.mobileMenu.classList.contains('active');

    if (isOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  },

  openMobileMenu() {
    this.mobileMenu.classList.add('active');
    this.mobileMenu.setAttribute('aria-hidden', 'false');
    this.menuToggle.classList.add('active');
    this.menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  },

  closeMobileMenu() {
    this.mobileMenu.classList.remove('active');
    this.mobileMenu.setAttribute('aria-hidden', 'true');
    this.menuToggle.classList.remove('active');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
};

window.Navigation = Navigation;
