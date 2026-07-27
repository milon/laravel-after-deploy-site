document.getElementById('year').textContent = new Date().getFullYear();

// Mobile hamburger menu: toggles the nav-links dropdown panel.
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
    const closeMenu = () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
    };

    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close after following a link, on outside click, or on Escape.
    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.classList.contains('is-open')) {
            return;
        }
        if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    // Collapse the mobile panel state if the viewport grows into desktop nav.
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
}
