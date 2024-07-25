document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour faire défiler vers les spécialités
    window.scrollToSpecials = function() {
        const specialsElement = document.getElementById('specials');
        if (specialsElement) {
            specialsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Initialisation de la classe active pour les liens de navigation
    const links = document.querySelectorAll('.nav-right a, .burger-nav a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }

        // Ajoute un événement click pour les liens de navigation
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Gestion de l'ouverture et de la fermeture du menu burger
    const burgerIcon = document.getElementById('burger-icon');
    const burgerNav = document.getElementById('burger-nav');
    const currentPageElement = document.getElementById('current-page');

    if (burgerIcon && burgerNav && currentPageElement) {
        // Afficher le titre de la page actuelle
        const path = window.location.pathname;
        const pageTitles = {
            '/index.html': 'Accueil',
            '/commandes.html': 'Commandes en ligne',
            '/carte.html': 'À la carte',
            '/cheque-cadeau.html': 'Chèque cadeau',
            '/galerie.html': 'Galerie Photo',
            '/actualites.html': 'Actualités',
            '/contact.html': 'Contactez-nous'
        };

        const pageTitle = pageTitles[path] || 'Page actuelle';
        currentPageElement.textContent = `Page actuelle : ${pageTitle}`;

        // Gérer l'ouverture et la fermeture du menu burger
        burgerIcon.addEventListener('click', function() {
            const isVisible = burgerNav.style.display === 'block';
            burgerNav.style.display = isVisible ? 'none' : 'block';
        });

        // Fermeture du menu burger lorsqu'un lien est cliqué
        burgerNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                burgerNav.style.display = 'none';
            });
        });
    } else {
        console.error('Burger menu icon, navigation, or current page element not found.');
    }
});
