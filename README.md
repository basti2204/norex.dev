# NOREX Website

A professional, multi-file website for the NOREX deterministic operating system.

## 📁 Project Structure

```
norex-website/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties (colors, spacing, etc.)
│   ├── base.css            # Reset, body styles, background effects
│   ├── typography.css      # Font sizes and text utilities
│   ├── components.css      # Buttons, cards, terminal, nav, etc.
│   ├── layout.css          # Page sections and layouts
│   ├── animations.css      # Keyframes and reveal animations
│   └── responsive.css      # Media queries for mobile/tablet
├── js/
│   ├── utils.js            # Utility functions (throttle, debounce, etc.)
│   ├── sound.js            # Web Audio API sound system
│   ├── particles.js        # Canvas particle system
│   ├── terminal.js         # Interactive terminal emulator
│   ├── navigation.js       # Page transitions and routing
│   ├── animations.js       # Scroll reveals and cursor effects
│   └── main.js             # App initialization
└── assets/                 # Images, fonts, etc. (if needed)
```

## ✨ Features

- **WebGL-like Particle System** - Interactive particles that follow the mouse
- **Sound Design** - Subtle UI sounds (hover, click, transition, success)
- **Interactive Terminal** - Real commands: `help`, `uname`, `ps`, `free`, `demo`, `clear`
- **Page Transitions** - Smooth wipe animations between pages
- **Dark/Light Theme** - Toggle with persistence
- **Mobile Navigation** - Responsive hamburger menu
- **Reveal Animations** - Scroll-triggered content reveals
- **Custom Cursor** - Rotating square cursor on desktop
- **Ambient Glow** - Mouse-following glow effect
- **Preloader** - Branded loading animation

## 🚀 Usage

1. Simply open `index.html` in a browser
2. Or serve with any static file server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve

# PHP
php -S localhost:8000
```

## 🎨 Customization

### Colors
Edit `css/variables.css` to change the color scheme:

```css
:root {
  --accent: #C9A87C;  /* Gold accent */
  --bg: #0A0A0B;      /* Dark background */
  /* ... */
}
```

### Typography
Fonts are loaded from Google Fonts:
- **Inter** - UI text
- **JetBrains Mono** - Code/terminal

## 🔊 Sound

Click the 🔇 button in the navigation to enable sound effects.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License
