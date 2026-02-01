/* ==========================================================================
   UTILITIES
   ========================================================================== */

const Utils = {
  // DOM Ready
  ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  },

  // Query selector shortcuts
  $(selector, context = document) {
    return context.querySelector(selector);
  },

  $$(selector, context = document) {
    return [...context.querySelectorAll(selector)];
  },

  // Throttle function
  throttle(fn, wait) {
    let lastTime = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastTime >= wait) {
        lastTime = now;
        fn.apply(this, args);
      }
    };
  },

  // Debounce function
  debounce(fn, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), wait);
    };
  },

  // Check if element is in viewport
  isInViewport(el, threshold = 0.1) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
  },

  // Get CSS variable
  getCSSVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  },

  // Set CSS variable
  setCSSVar(name, value) {
    document.documentElement.style.setProperty(name, value);
  },

  // Sleep/delay
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

// Export for use in other files
window.Utils = Utils;
