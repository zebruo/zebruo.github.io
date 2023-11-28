// Version actuelle du script
const version = "10.0.0"; 

// Attend que tout le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', function () { 

    // Mise à jour de la version dans le footer
    document.getElementById('version').textContent = version;

    // Ajout de la date dans le footer
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);
    dateElement.textContent = `${formattedDate}`;

    // Liste des champs à réinitialiser
    const fieldsToReset = ['shaftDiameter', 'toolMaterial'];

    // Pour chaque champ à réinitialiser
    fieldsToReset.forEach(field => {
        // Récupère l'élément de sélection par son identifiant
        const selectElement = document.getElementById(field);
        // Réinitialise la sélection du champ à aucune option choisie
        selectElement.selectedIndex = -1;
    });
});