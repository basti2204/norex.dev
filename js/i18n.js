/* ==========================================================================
   INTERNATIONALIZATION (i18n)
   ========================================================================== */

const i18n = {
  currentLang: 'en',

  translations: {
    en: {
      // Navigation
      'nav.architecture': 'Architecture',
      'nav.components': 'Components',
      'nav.status': 'Status',
      'nav.contact': 'Contact',
      'nav.home': 'Home',

      // Hero
      'hero.title1': 'PREDICT',
      'hero.title2': 'ABLE',
      'hero.label': 'Operating System',
      'hero.text': 'An operating system where every behavior is intentional. Every outcome, predictable. Built from zero.',
      'hero.cta': 'Explore Architecture',
      'hero.scroll': 'or scroll',
      'hero.side': 'RESEARCH GRADE — 2026',

      // Manifesto
      'manifesto.line1': 'Same input',
      'manifesto.line2': 'Same output',
      'manifesto.line3': 'Every single time.',

      // Numbers
      'numbers.val.loc': '270K',
      'numbers.val.deps': '0',
      'numbers.val.acpi': '136',
      'numbers.val.repro': '∞',
      'numbers.loc': 'Lines of code',
      'numbers.loc.sub': 'From scratch.',
      'numbers.deps': 'Dependencies',
      'numbers.deps.sub': 'Self-contained.',
      'numbers.acpi': 'ACPI files',
      'numbers.acpi.sub': 'Full 6.5 spec.',
      'numbers.repro': 'Reproducibility',
      'numbers.repro.sub': 'Deterministic.',

      // Marquee
      'marquee.1': 'DETERMINISM',
      'marquee.2': 'SEPARATION',
      'marquee.3': 'BOUNDED EXECUTION',
      'marquee.4': 'ZERO STUBS',
      'marquee.5': 'CLEAN ROOM',

      // Terminal
      'terminal.label': 'Interactive',
      'terminal.title': 'Try the system',
      'terminal.hint': 'Type "help" or "demo" for boot sequence.',

      // Architecture Teaser
      'arch.label': 'Architecture',
      'arch.title1': 'Facts',
      'arch.title2': 'not opinions',
      'arch.text': 'The kernel reports what it sees. Userland decides what to do. Clean separation.',
      'arch.cta': 'View Architecture',

      // Components Preview
      'comp.label': 'Components',
      'comp.title': 'What exists',
      'comp.viewall': 'View All →',
      'comp.bootloader': 'Bootloader',
      'comp.hardware': 'Hardware',
      'comp.kernel': 'Kernel',
      'comp.stack': 'Stack',
      'comp.drivers': 'Drivers',
      'comp.gui': 'GUI',
      'comp.stable': 'Stable',

      // Component titles
      'comp.title.astryx': 'ASTRYX',
      'comp.title.acpi': 'ACPI',
      'comp.title.memory': 'Memory',
      'comp.title.network': 'Network',
      'comp.title.usb': 'USB',
      'comp.title.compositor': 'Compositor',

      // Component descriptions
      'comp.astryx': 'UEFI boot. 11 phases.',
      'comp.acpi': 'Full 6.5 spec. AML.',
      'comp.memory': 'Buddy allocator. COW.',
      'comp.network': 'IPv4/6. TCP/UDP.',
      'comp.usb': 'xHCI. HID. Storage.',
      'comp.compositor': 'Window server.',

      // CTA
      'cta.title': 'Research grade',
      'cta.text': 'Functional on real hardware. Active research.',
      'cta.status': 'View Status',
      'cta.docs': 'Read Docs',

      // Architecture Page
      'archpage.title1': 'System',
      'archpage.title2': 'structure',
      'layer.userland': 'USERLAND',
      'layer.userland.desc': 'Policy daemons.',
      'layer.kernel': 'KERNEL',
      'layer.kernel.desc': 'System core.',
      'layer.astryx': 'ASTRYX',
      'layer.astryx.desc': 'UEFI bootloader.',
      'layer.hardware': 'HARDWARE',
      'layer.hardware.desc': 'Bare metal.',

      // Components Page
      'comppage.title': 'Inventory',
      'comppage.core': 'Core',
      'comppage.hardware': 'Hardware',
      'comppage.network': 'Network',
      'comppage.interface': 'Interface',

      // Inventory descriptions
      'inv.astryx.desc': 'UEFI bootloader.',
      'inv.memory.desc': 'Buddy allocator.',
      'inv.acpi.desc': 'Full 6.5 spec.',
      'inv.usb.desc': 'xHCI controller.',
      'inv.ip.desc': 'IPv4/IPv6.',
      'inv.compositor.desc': 'Window server.',
      'inv.stable': 'STABLE',

      // Status Page
      'statuspage.title1': 'Current',
      'statuspage.title2': 'state',
      'status.phase': 'Phase',
      'status.research': 'RESEARCH',
      'status.desc': 'Functional on real hardware.',
      'status.operational': 'Operational',

      // Operational items
      'op.uefi': 'UEFI boot',
      'op.gui': 'GUI',
      'op.files': 'Files',
      'op.terminal': 'Terminal',
      'op.usb': 'USB',
      'op.network': 'Network',
      'op.nvme': 'NVMe',
      'op.multitask': 'Multitask',

      // Contact Page
      'contactpage.title1': 'Get in',
      'contactpage.title2': 'touch',
      'contact.intro': 'Have questions about NOREX? Want to contribute or collaborate? Send us a message.',
      'contact.email': 'Email',
      'contact.response': 'Response Time',
      'contact.response.value': 'Usually within 48 hours',
      'contact.name': 'Name',
      'contact.name.placeholder': 'Your name',
      'contact.email.placeholder': 'your@email.com',
      'contact.subject': 'Subject',
      'contact.subject.select': 'Select a topic',
      'contact.subject.general': 'General Inquiry',
      'contact.subject.technical': 'Technical Question',
      'contact.subject.collaboration': 'Collaboration',
      'contact.subject.feedback': 'Feedback',
      'contact.message': 'Message',
      'contact.message.placeholder': 'Your message...',
      'contact.submit': 'Send Message',

      // Footer
      'footer.tagline': 'A predictable OS. Research grade.',
      'footer.navigate': 'Navigate',
      'footer.legal': 'Legal',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy Policy',

      // Cookie Banner
      'cookie.title': 'Cookie Settings',
      'cookie.text': 'This website uses localStorage for theme and sound settings. No tracking cookies.',
      'cookie.learn': 'Learn more',
      'cookie.accept': 'Accept',

      // Misc
      'back': '← Back to home'
    },

    de: {
      // Navigation
      'nav.architecture': 'Architektur',
      'nav.components': 'Komponenten',
      'nav.status': 'Status',
      'nav.contact': 'Kontakt',
      'nav.home': 'Start',

      // Hero
      'hero.title1': 'VORHER',
      'hero.title2': 'SEHBAR',
      'hero.label': 'Betriebssystem',
      'hero.text': 'NOREX ist ein Betriebssystem, bei dem Systemverhalten vollständig definiert ist. Gleiche Bedingungen führen zu gleichen Ergebnissen. Entwickelt von Grund auf, ohne Fremdabhängigkeiten.',
      'hero.cta': 'Architektur ansehen',
      'hero.scroll': 'oder scrollen',
      'hero.side': 'RESEARCH GRADE — 2026',

      // Manifesto
      'manifesto.line1': 'Gleiche Eingabe',
      'manifesto.line2': 'Gleiches Ergebnis',
      'manifesto.line3': 'Reproduzierbar.',

      // Numbers
      'numbers.val.loc': '270.000',
      'numbers.val.deps': '0',
      'numbers.val.acpi': '136',
      'numbers.val.repro': '∞',
      'numbers.loc': 'Zeilen Code',
      'numbers.loc.sub': 'Vollständig selbst implementiert.',
      'numbers.deps': 'Abhängigkeiten',
      'numbers.deps.sub': 'Kein Fremdcode.',
      'numbers.acpi': 'ACPI-Dateien',
      'numbers.acpi.sub': 'Vollständige Abdeckung der Spezifikation.',
      'numbers.repro': 'Reproduzierbarkeit',
      'numbers.repro.sub': 'Systemverhalten ist wiederholbar.',

      // Marquee
      'marquee.1': 'DEFINIERTES VERHALTEN',
      'marquee.2': 'KLARE SCHICHTENTRENNUNG',
      'marquee.3': 'BEGRENZTE AUSFÜHRUNG',
      'marquee.4': 'KEINE STUBS',
      'marquee.5': 'CLEAN-ROOM-ENTWICKLUNG',

      // Terminal
      'terminal.label': 'Interaktiv',
      'terminal.title': 'Systemsimulation',
      'terminal.hint': 'Die Startsequenz von NOREX kann hier simuliert werden. Befehle: help, demo',

      // Architecture Teaser
      'arch.label': 'Architektur',
      'arch.title1': 'Zustandserfassung',
      'arch.title2': 'statt Interpretation',
      'arch.text': 'Der Kernel stellt ausschließlich Messwerte und Ereignisse bereit. Entscheidungen über Reaktionen und Policies liegen vollständig im Userland. Diese Trennung ist strikt und durchgängig umgesetzt.',
      'arch.cta': 'Architektur ansehen',

      // Components Preview
      'comp.label': 'Komponenten',
      'comp.title': 'Auszug',
      'comp.viewall': 'Alle Komponenten ansehen →',
      'comp.bootloader': 'UEFI-Bootloader',
      'comp.hardware': 'Hardwareabstraktion',
      'comp.kernel': 'Speicherverwaltung',
      'comp.stack': 'Netzwerk-Stack',
      'comp.drivers': 'Gerätetreiber',
      'comp.gui': 'Grafische Oberfläche',
      'comp.stable': 'Stabil',

      // Component titles
      'comp.title.astryx': 'ASTRYX',
      'comp.title.acpi': 'ACPI',
      'comp.title.memory': 'Memory',
      'comp.title.network': 'Network',
      'comp.title.usb': 'USB',
      'comp.title.compositor': 'Compositor',

      // Component descriptions
      'comp.astryx': 'Mehrstufiger Systemstart mit klar definierten Übergängen.',
      'comp.acpi': 'Vollständige Implementierung der ACPI-6.5-Spezifikation inklusive AML.',
      'comp.memory': 'Buddy-Allocator mit Copy-on-Write.',
      'comp.network': 'IPv4, IPv6, TCP, UDP.',
      'comp.usb': 'xHCI, HID, Massenspeicher.',
      'comp.compositor': 'Eigenständiger Window-Server.',

      // CTA
      'cta.title': 'Forschungsstand',
      'cta.text': 'NOREX ist funktionsfähig auf realer Hardware. Das System befindet sich in aktiver Entwicklung und dient primär der Forschung.',
      'cta.status': 'Status ansehen',
      'cta.docs': 'Dokumentation lesen',

      // Architecture Page
      'archpage.title1': 'Schichten',
      'archpage.title2': 'modell',
      'layer.userland': 'USERLAND',
      'layer.userland.desc': 'Policy-Daemons und Systemdienste',
      'layer.kernel': 'KERNEL',
      'layer.kernel.desc': 'Scheduler, Speicher, Dateisystem, Netzwerk',
      'layer.astryx': 'ASTRYX',
      'layer.astryx.desc': 'UEFI-Bootloader',
      'layer.hardware': 'HARDWARE',
      'layer.hardware.desc': 'x86_64-Systeme mit UEFI',

      // Components Page
      'comppage.title': 'Komponenten',
      'comppage.core': 'Kern',
      'comppage.hardware': 'Hardware',
      'comppage.network': 'Netzwerk',
      'comppage.interface': 'Oberfläche',

      // Inventory descriptions
      'inv.astryx.desc': 'UEFI-Bootloader.',
      'inv.memory.desc': 'Buddy-Allocator.',
      'inv.acpi.desc': 'ACPI 6.5 Spec.',
      'inv.usb.desc': 'xHCI-Controller.',
      'inv.ip.desc': 'IPv4/IPv6.',
      'inv.compositor.desc': 'Window-Server.',
      'inv.stable': 'STABIL',

      // Status Page
      'statuspage.title1': 'Aktueller',
      'statuspage.title2': 'Stand',
      'status.phase': 'Phase',
      'status.research': 'FORSCHUNG',
      'status.desc': 'Stabiler Betrieb auf ausgewählten Systemen.',
      'status.operational': 'Vorhandene Funktionalität',

      // Operational items
      'op.uefi': 'UEFI-Boot',
      'op.gui': 'Grafische Oberfläche',
      'op.files': 'Dateisystem',
      'op.terminal': 'Terminal',
      'op.usb': 'USB',
      'op.network': 'Netzwerk',
      'op.nvme': 'NVMe',
      'op.multitask': 'Multitasking',

      // Contact Page
      'contactpage.title1': 'Kontakt',
      'contactpage.title2': 'aufnehmen',
      'contact.intro': 'Du hast Fragen zu NOREX? Du möchtest Feedback geben oder an der Entwicklung mitwirken? Dann melde dich.',
      'contact.email': 'E-Mail',
      'contact.response': 'Antwortzeit',
      'contact.response.value': 'In der Regel innerhalb von 48 Stunden',
      'contact.name': 'Name',
      'contact.name.placeholder': 'Dein Name',
      'contact.email.placeholder': 'deine@email.de',
      'contact.subject': 'Betreff',
      'contact.subject.select': 'Thema wählen',
      'contact.subject.general': 'Allgemeine Anfrage',
      'contact.subject.technical': 'Technische Frage',
      'contact.subject.collaboration': 'Zusammenarbeit',
      'contact.subject.feedback': 'Feedback',
      'contact.message': 'Nachricht',
      'contact.message.placeholder': 'Deine Nachricht...',
      'contact.submit': 'Absenden',

      // Footer
      'footer.tagline': 'Ein vorhersehbares Betriebssystem.',
      'footer.navigate': 'Navigation',
      'footer.legal': 'Rechtliches',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',

      // Cookie Banner
      'cookie.title': 'Cookies',
      'cookie.text': 'Diese Website speichert ausschließlich lokale Einstellungen (Theme, Sound). Es werden keine Tracking- oder Analyse-Cookies eingesetzt.',
      'cookie.learn': 'Mehr erfahren',
      'cookie.accept': 'Akzeptieren',

      // Misc
      'back': '← Zurück zur Startseite'
    },

    fr: {
      // Navigation
      'nav.architecture': 'Architecture',
      'nav.components': 'Composants',
      'nav.status': 'Statut',
      'nav.contact': 'Contact',
      'nav.home': 'Accueil',

      // Hero
      'hero.title1': 'PRÉVI',
      'hero.title2': 'SIBLE',
      'hero.label': 'Système d\'exploitation',
      'hero.text': 'NOREX est un système d\'exploitation dont le comportement est entièrement défini. Dans des conditions identiques, le résultat est identique. Développé intégralement depuis zéro, sans dépendances externes.',
      'hero.cta': 'Voir l\'architecture',
      'hero.scroll': 'ou faire défiler',
      'hero.side': 'RESEARCH GRADE — 2026',

      // Manifesto
      'manifesto.line1': 'Même entrée',
      'manifesto.line2': 'Même résultat',
      'manifesto.line3': 'Reproductible.',

      // Numbers
      'numbers.val.loc': '270 000',
      'numbers.val.deps': '0',
      'numbers.val.acpi': '136',
      'numbers.val.repro': '∞',
      'numbers.loc': 'Lignes de code',
      'numbers.loc.sub': 'Entièrement implémentées en interne.',
      'numbers.deps': 'Dépendances',
      'numbers.deps.sub': 'Aucun code tiers.',
      'numbers.acpi': 'Fichiers ACPI',
      'numbers.acpi.sub': 'Couverture complète de la spécification.',
      'numbers.repro': 'Reproductibilité',
      'numbers.repro.sub': 'Comportement système constant.',

      // Marquee
      'marquee.1': 'COMPORTEMENT DÉFINI',
      'marquee.2': 'SÉPARATION CLAIRE DES COUCHES',
      'marquee.3': 'EXÉCUTION BORNÉE',
      'marquee.4': 'AUCUN STUB',
      'marquee.5': 'DÉVELOPPEMENT CLEAN ROOM',

      // Terminal
      'terminal.label': 'Interactif',
      'terminal.title': 'Simulation du système',
      'terminal.hint': 'La séquence de démarrage de NOREX peut être simulée ici. Commandes disponibles : help, demo',

      // Architecture Teaser
      'arch.label': 'Architecture',
      'arch.title1': 'Observation de l\'état',
      'arch.title2': 'pas interprétation',
      'arch.text': 'Le noyau expose uniquement des mesures et des événements. Les décisions et politiques sont entièrement prises dans le userland. Cette séparation est stricte et cohérente sur l\'ensemble du système.',
      'arch.cta': 'Voir l\'architecture',

      // Components Preview
      'comp.label': 'Composants',
      'comp.title': 'Sélection',
      'comp.viewall': 'Voir tous les composants →',
      'comp.bootloader': 'Bootloader UEFI',
      'comp.hardware': 'Abstraction matérielle',
      'comp.kernel': 'Gestion de la mémoire',
      'comp.stack': 'Pile réseau',
      'comp.drivers': 'Pilotes',
      'comp.gui': 'Interface graphique',
      'comp.stable': 'Stable',

      // Component titles
      'comp.title.astryx': 'ASTRYX',
      'comp.title.acpi': 'ACPI',
      'comp.title.memory': 'Memory',
      'comp.title.network': 'Network',
      'comp.title.usb': 'USB',
      'comp.title.compositor': 'Compositor',

      // Component descriptions
      'comp.astryx': 'Démarrage du système en plusieurs phases clairement définies.',
      'comp.acpi': 'Implémentation complète de la spécification ACPI 6.5, y compris AML.',
      'comp.memory': 'Buddy allocator avec Copy-on-Write.',
      'comp.network': 'IPv4, IPv6, TCP, UDP.',
      'comp.usb': 'xHCI, HID, stockage de masse.',
      'comp.compositor': 'Serveur de fenêtres autonome.',

      // CTA
      'cta.title': 'État de la recherche',
      'cta.text': 'NOREX fonctionne sur du matériel réel. Le système est en développement actif et sert principalement à la recherche.',
      'cta.status': 'Voir le statut',
      'cta.docs': 'Lire la documentation',

      // Architecture Page
      'archpage.title1': 'Organisation',
      'archpage.title2': 'en couches',
      'layer.userland': 'USERLAND',
      'layer.userland.desc': 'Démons de politique et services système',
      'layer.kernel': 'NOYAU',
      'layer.kernel.desc': 'Ordonnanceur, mémoire, système de fichiers, réseau',
      'layer.astryx': 'ASTRYX',
      'layer.astryx.desc': 'Bootloader UEFI',
      'layer.hardware': 'MATÉRIEL',
      'layer.hardware.desc': 'Systèmes x86_64 avec UEFI',

      // Components Page
      'comppage.title': 'Composants',
      'comppage.core': 'Noyau',
      'comppage.hardware': 'Matériel',
      'comppage.network': 'Réseau',
      'comppage.interface': 'Interface',

      // Inventory descriptions
      'inv.astryx.desc': 'Bootloader UEFI.',
      'inv.memory.desc': 'Buddy allocator.',
      'inv.acpi.desc': 'ACPI 6.5 Spec.',
      'inv.usb.desc': 'Contrôleur xHCI.',
      'inv.ip.desc': 'IPv4/IPv6.',
      'inv.compositor.desc': 'Serveur de fenêtres.',
      'inv.stable': 'STABLE',

      // Status Page
      'statuspage.title1': 'État',
      'statuspage.title2': 'actuel',
      'status.phase': 'Phase',
      'status.research': 'RECHERCHE',
      'status.desc': 'Fonctionnement stable sur des systèmes sélectionnés.',
      'status.operational': 'Fonctionnalités disponibles',

      // Operational items
      'op.uefi': 'Boot UEFI',
      'op.gui': 'Interface graphique',
      'op.files': 'Système de fichiers',
      'op.terminal': 'Terminal',
      'op.usb': 'USB',
      'op.network': 'Réseau',
      'op.nvme': 'NVMe',
      'op.multitask': 'Multitâche',

      // Contact Page
      'contactpage.title1': 'Nous',
      'contactpage.title2': 'contacter',
      'contact.intro': 'Tu as des questions sur NOREX ? Tu souhaites donner un retour ou contribuer au projet ? Écris-nous.',
      'contact.email': 'E-mail',
      'contact.response': 'Délai de réponse',
      'contact.response.value': 'Généralement sous 48 heures',
      'contact.name': 'Nom',
      'contact.name.placeholder': 'Ton nom',
      'contact.email.placeholder': 'ton@email.fr',
      'contact.subject': 'Sujet',
      'contact.subject.select': 'Choisir un sujet',
      'contact.subject.general': 'Demande générale',
      'contact.subject.technical': 'Question technique',
      'contact.subject.collaboration': 'Collaboration',
      'contact.subject.feedback': 'Retour',
      'contact.message': 'Message',
      'contact.message.placeholder': 'Ton message...',
      'contact.submit': 'Envoyer',

      // Footer
      'footer.tagline': 'Un système d\'exploitation prévisible.',
      'footer.navigate': 'Navigation',
      'footer.legal': 'Mentions légales',
      'footer.imprint': 'Mentions légales',
      'footer.privacy': 'Politique de confidentialité',

      // Cookie Banner
      'cookie.title': 'Cookies',
      'cookie.text': 'Ce site utilise uniquement le stockage local pour les préférences (thème, son). Aucun cookie de suivi ou d\'analyse n\'est utilisé.',
      'cookie.learn': 'En savoir plus',
      'cookie.accept': 'Accepter',

      // Misc
      'back': '← Retour à l\'accueil'
    }
  },

  init() {
    // Load saved language or use default (English)
    const saved = localStorage.getItem('norex-lang');
    this.currentLang = saved || 'en';
    document.documentElement.lang = this.currentLang;
    this.updateAllTexts();
    this.updateLangToggle();
  },

  setLang(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('norex-lang', lang);
      document.documentElement.lang = lang;
      this.updateAllTexts();
      this.updateLangToggle();
    }
  },

  toggle() {
    const langs = ['en', 'de', 'fr'];
    const currentIndex = langs.indexOf(this.currentLang);
    const next = langs[(currentIndex + 1) % langs.length];
    this.setLang(next);
    return next;
  },

  t(key) {
    return this.translations[this.currentLang][key] || this.translations['en'][key] || key;
  },

  updateAllTexts() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });

    // Update elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder);
    });

    // Update legal page links based on language
    this.updateLegalLinks();
  },

  updateLegalLinks() {
    const lang = this.currentLang;

    // Footer links
    const footerImprint = document.getElementById('footer-imprint');
    const footerPrivacy = document.getElementById('footer-privacy');

    const imprintUrls = { en: 'imprint.html', de: 'impressum.html', fr: 'mentions-legales.html' };
    const privacyUrls = { en: 'privacy.html', de: 'datenschutz.html', fr: 'confidentialite.html' };

    if (footerImprint) {
      footerImprint.href = imprintUrls[lang] || imprintUrls.en;
    }
    if (footerPrivacy) {
      footerPrivacy.href = privacyUrls[lang] || privacyUrls.en;
    }

    // Cookie banner link
    const cookiePrivacy = document.getElementById('cookie-privacy-link');
    if (cookiePrivacy) {
      cookiePrivacy.href = privacyUrls[lang] || privacyUrls.en;
    }
  },

  updateLangToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      const icon = toggle.querySelector('.lang-icon');
      if (icon) {
        icon.textContent = this.currentLang.toUpperCase();
      }
    }
  }
};

window.i18n = i18n;
