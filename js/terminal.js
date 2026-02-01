/* ==========================================================================
   TERMINAL
   ========================================================================== */

const Terminal = {
  output: null,
  input: null,
  form: null,
  busy: false,

  commands: {
    help: () => [
      'Available commands:',
      '  help   — show this message',
      '  uname  — system information',
      '  ps     — list processes',
      '  free   — memory usage',
      '  lspci  — list PCI devices',
      '  demo   — boot sequence demo',
      '  clear  — clear terminal'
    ],

    uname: () => ['NOREX 0.1.0 x86_64 (deterministic)'],

    ps: () => [
      'PID  NAME         STATE   CPU',
      '  1  init         run     0.1%',
      '  2  powerd       run     0.3%',
      '  3  secd         run     0.1%',
      '  4  networkd     run     0.5%',
      '  5  compositor   run     2.3%'
    ],

    free: () => [
      'Memory: 48 MB / 256 MB (18%)',
      'Cached: 12 MB'
    ],

    lspci: () => [
      '00:00.0 Host bridge: NOREX MCH',
      '00:02.0 VGA: NOREX GPU',
      '00:1f.2 SATA controller: AHCI',
      '01:00.0 NVMe: Samsung 980 PRO'
    ],

    clear: () => {
      Terminal.output.innerHTML = '';
      return null;
    },

    demo: async () => {
      const steps = [
        { delay: 300, text: '→ Initializing kernel...', type: 'output' },
        { delay: 400, text: '  [OK] Memory manager', type: 'success' },
        { delay: 350, text: '  [OK] Scheduler', type: 'success' },
        { delay: 300, text: '  [OK] VFS mounted', type: 'success' },
        { delay: 400, text: '→ Starting daemons...', type: 'output' },
        { delay: 350, text: '  [OK] powerd: watching CPU', type: 'success' },
        { delay: 300, text: '  [OK] secd: policies loaded', type: 'success' },
        { delay: 350, text: '  [OK] networkd: eth0 UP', type: 'success' },
        { delay: 500, text: '→ System ready.', type: 'output' }
      ];

      Terminal.busy = true;
      Terminal.input.disabled = true;

      for (const step of steps) {
        await Utils.sleep(step.delay);
        Terminal.addLine(step.text, step.type);
        Sound.play('type');
      }

      Terminal.busy = false;
      Terminal.input.disabled = false;
      Terminal.input.focus();
      Sound.play('success');

      return null;
    }
  },

  init() {
    this.output = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    this.form = document.getElementById('terminal-form');

    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Focus input when clicking terminal
    const terminal = document.getElementById('terminal');
    if (terminal) {
      terminal.addEventListener('click', () => {
        if (!this.busy) this.input.focus();
      });
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    if (this.busy) return;

    const value = this.input.value.trim();
    if (!value) return;

    // Show input
    this.addLine(`$ ${value}`, 'input');
    this.input.value = '';
    Sound.play('click');

    // Process command
    const cmd = value.toLowerCase();
    
    if (this.commands[cmd]) {
      const result = this.commands[cmd]();
      if (result && Array.isArray(result)) {
        result.forEach(line => this.addLine(line, 'output'));
      }
    } else {
      this.addLine(`Command not found: ${cmd}`, 'error');
      Sound.play('error');
    }

    this.scrollToBottom();
  },

  addLine(text, type = 'output') {
    const line = document.createElement('div');
    line.className = `terminal__line terminal__line--${type}`;
    line.textContent = text;
    this.output.appendChild(line);
    this.scrollToBottom();
  },

  scrollToBottom() {
    this.output.scrollTop = this.output.scrollHeight;
  }
};

window.Terminal = Terminal;
