// Mettre cette function retadatisse ne charge que quand le DOM est charger; et mettre tous son js dans cette function retardisse //
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour faire défiler vers les spécialités
    window.scrollToSpecials = function() {
        document.getElementById('specials').scrollIntoView({ behavior: 'smooth' });
    }

}) 

