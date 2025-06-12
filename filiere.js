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