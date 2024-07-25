document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour faire défiler vers les spécialités
    window.scrollToSpecials = function() {
        document.getElementById('specials').scrollIntoView({ behavior: 'smooth' });
    }

    // Exemple d'autres initialisations ou fonctions que vous pourriez avoir besoin d'exécuter
    // lorsque le DOM est complètement chargé.
    // Par exemple, initialisation de la classe active pour les liens de navigation.
    const links = document.querySelectorAll('.nav-right a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

