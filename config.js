// Site configuration for Great THUG
// Edit these values to customize your site

const SITE_CONFIG = {
    // Personal info
    title: "Skibiditoile3qb3",
    citation: "Be yourself; everyone else is already taken.",

    // Main colors (hex format)
    colors: {
        primary: "#3574e2",
        secondary: "#4d8aff",
        accent: "#6ba3ff",
        white: "#ffffff",
        black: "#000000"
    },

    // Social links
    socialLinks: {
        github: "https://github.com/skibiditoile3qb3",
        discord: "https://discord.gg/BhQk4q3JGJ",
        telegram: "https://mail.google.com/mail/?view=cm&fs=1&to=jokesterman4@gmail.com"
    },

    // Audio settings
    audio: {
        volume: 0.05,
        autoplay: false,   // Browser policy blocks autoplay with sound; user must click the button
        loop: true
    },

    // Video settings
    video: {
        autoplay: true,
        muted: true,
        loop: true,
        playsinline: true
    },

    // Animation settings
    animations: {
        enabled: true,
        particleInterval: 300,      // How often particles spawn (ms)
        paintDropInterval: 800,     // How often paint drops spawn (ms)
        titleTypingSpeed: 150,      // Typewriter speed for title (ms per char)
        citationTypingSpeed: 80,    // Typewriter speed for citation (ms per char)
        tabTitleSpeed: 200          // Tab title animation speed (ms)
    },

    // Responsive breakpoints
    responsive: {
        mobile: 768,
        tablet: 1024
    },

    // Visual effects toggles
    effects: {
        particles: true,
        paintDrops: true,
        clickRipple: true,
        avatarGlow: true
    }
};

// Apply config to the DOM
function applyConfig() {
    // Page title
    document.title = SITE_CONFIG.title;

    // Audio settings
    const audio = document.getElementById("audio");
    if (audio) {
        audio.volume = SITE_CONFIG.audio.volume;
        audio.loop   = SITE_CONFIG.audio.loop;
    }

    // Video settings
    const video = document.getElementById("background");
    if (video) {
        video.autoplay   = SITE_CONFIG.video.autoplay;
        video.muted      = SITE_CONFIG.video.muted;
        video.loop       = SITE_CONFIG.video.loop;
        video.playsInline = SITE_CONFIG.video.playsinline;
    }

    // Social links — match by platform keyword in href
    const linkMap = {
        github:   document.querySelector('a[aria-label="GitHub"]'),
        discord:  document.querySelector('a[aria-label="Discord"]'),
        telegram: document.querySelector('a[aria-label="Email"]')
    };

    for (const [platform, el] of Object.entries(linkMap)) {
        if (el && SITE_CONFIG.socialLinks[platform]) {
            el.href = SITE_CONFIG.socialLinks[platform];
        }
    }
}

// Toggle a visual effect on/off
function toggleEffect(effectName, enabled) {
    if (SITE_CONFIG.effects[effectName] !== undefined) {
        SITE_CONFIG.effects[effectName] = enabled;
    }
}

// Update color variables
function updateColors(newColors) {
    Object.assign(SITE_CONFIG.colors, newColors);
    const root = document.documentElement;
    root.style.setProperty('--primary-color',   SITE_CONFIG.colors.primary);
    root.style.setProperty('--secondary-color', SITE_CONFIG.colors.secondary);
    root.style.setProperty('--accent-color',    SITE_CONFIG.colors.accent);
}

function getConfig() {
    return SITE_CONFIG;
}

// Expose globally
window.SITE_CONFIG      = SITE_CONFIG;
window.applyConfig      = applyConfig;
window.toggleEffect     = toggleEffect;
window.updateColors     = updateColors;
window.getConfig        = getConfig;

// Auto-apply on DOM ready
document.addEventListener('DOMContentLoaded', applyConfig);
