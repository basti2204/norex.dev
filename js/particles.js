/* ==========================================================================
   PARTICLE SYSTEM
   ========================================================================== */

const Particles = {
  canvas: null,
  ctx: null,
  particles: [],
  mouse: { x: 0, y: 0 },
  animationId: null,

  init() {
    this.canvas = document.getElementById('particles');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  },

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
    this.ctx.scale(dpr, dpr);
  },

  createParticles() {
    const count = Math.min(45, Math.floor(window.innerWidth / 35));
    this.particles = [];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2
      });
    }
  },

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('resize', Utils.debounce(() => {
      this.resize();
      this.createParticles();
    }, 200), { passive: true });
  },

  getParticleColor() {
    const rgb = Utils.getCSSVar('--particle');
    return rgb || '201, 168, 124';
  },

  animate() {
    const { ctx, particles, mouse } = this;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const particleColor = this.getParticleColor();

    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      // Mouse attraction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 180 && dist > 0) {
        const force = (180 - dist) / 180 * 0.02;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Friction
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Phase for opacity animation
      p.phase += 0.015;

      // Wrap around edges
      if (p.x < -50) p.x = width + 50;
      if (p.x > width + 50) p.x = -50;
      if (p.y < -50) p.y = height + 50;
      if (p.y > height + 50) p.y = -50;

      // Draw particle
      const opacity = p.opacity * (0.6 + Math.sin(p.phase) * 0.4);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particleColor}, ${opacity})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx2 = p.x - p2.x;
        const dy2 = p.y - p2.y;
        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (dist2 < 140) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${particleColor}, ${(1 - dist2 / 140) * 0.1})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  },

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
};

window.Particles = Particles;
