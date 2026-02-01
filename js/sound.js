/* ==========================================================================
   SOUND SYSTEM
   ========================================================================== */

const Sound = {
  ctx: null,
  enabled: false,
  volume: 0.08,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.enabled = true;
    }
  },

  play(type) {
    if (!this.enabled || !this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    gain.gain.setValueAtTime(0, now);

    switch (type) {
      case 'hover':
        osc.frequency.setValueAtTime(800, now);
        osc.type = 'sine';
        gain.gain.linearRampToValueAtTime(this.volume * 0.3, now + 0.02);
        gain.gain.linearRampToValueAtTime(0, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
        break;

      case 'click':
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.linearRampToValueAtTime(350, now + 0.1);
        osc.type = 'triangle';
        gain.gain.linearRampToValueAtTime(this.volume * 0.5, now + 0.01);
        gain.gain.linearRampToValueAtTime(0, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
        break;

      case 'whoosh':
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.25);
        osc.type = 'sine';
        gain.gain.linearRampToValueAtTime(this.volume * 0.4, now + 0.05);
        gain.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
        break;

      case 'success':
        osc.frequency.setValueAtTime(523, now);
        osc.type = 'sine';
        gain.gain.linearRampToValueAtTime(this.volume * 0.5, now + 0.02);
        gain.gain.linearRampToValueAtTime(0, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.25);
        break;

      case 'type':
        osc.frequency.setValueAtTime(600 + Math.random() * 200, now);
        osc.type = 'square';
        gain.gain.linearRampToValueAtTime(this.volume * 0.1, now + 0.005);
        gain.gain.linearRampToValueAtTime(0, now + 0.02);
        osc.start(now);
        osc.stop(now + 0.02);
        break;

      case 'error':
        osc.frequency.setValueAtTime(200, now);
        osc.type = 'sawtooth';
        gain.gain.linearRampToValueAtTime(this.volume * 0.3, now + 0.01);
        gain.gain.linearRampToValueAtTime(0, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
        break;
    }
  },

  toggle() {
    if (!this.ctx) {
      this.init();
    }
    this.enabled = !this.enabled;
    return this.enabled;
  }
};

window.Sound = Sound;
