// Menu responsive
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
    });
}

// Focus trap for menu (accessibilité)
navUl && navUl.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const focusable = navUl.querySelectorAll('a');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation améliorée
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Réinitialiser messages d'erreur
        document.querySelectorAll('.error-message').forEach(span => span.textContent = '');

        let isValid = true;

        // Validation Nom
        const name = document.getElementById('name');
        if (!name.value.trim()) {
            isValid = false;
            document.getElementById('name-error').textContent = 'Le nom est requis.';
        }

        // Validation Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            isValid = false;
            document.getElementById('email-error').textContent = 'L\'e-mail est requis.';
        } else if (!emailRegex.test(email.value)) {
            isValid = false;
            document.getElementById('email-error').textContent = 'Format d\'e-mail invalide.';
        }

        // Validation Téléphone
        const phone = document.getElementById('phone');
        const phoneRegex = /^[0-9]{10}$/;
        if (!phone.value.trim()) {
            isValid = false;
            document.getElementById('phone-error').textContent = 'Le téléphone est requis.';
        } else if (!phoneRegex.test(phone.value.replace(/\s/g, ''))) {
            isValid = false;
            document.getElementById('phone-error').textContent = 'Format de téléphone invalide (10 chiffres).';
        }

        // Validation Consentement
        const consent = document.getElementById('consent');
        if (!consent.checked) {
            isValid = false;
            consent.focus();
        }

        if (isValid) {
            // Ici vous pouvez envoyer les données à un serveur via fetch ou AJAX
            // Simulation de l'envoi
            document.getElementById('form-success').style.display = 'block';
            contactForm.reset();
        }
    });

    // Retour visuel sur le blur
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('blur', function () {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#d1d5db';
            }
        });
    });
}
// Gestion du bouton de retour en haut
        window.addEventListener('scroll', function() {
            const scrollUpBtn = document.querySelector('.scroll-up-btn');
            if (window.pageYOffset > 300) {
                scrollUpBtn.classList.add('visible');
            } else {
                scrollUpBtn.classList.remove('visible');
            }
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }