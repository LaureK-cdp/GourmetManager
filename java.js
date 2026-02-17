/* ==========================================================================
   GESTION DYNAMIQUE DES INGRÉDIENTS (AVEC LOGS DE TEST)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.getElementById('add-ingredient');
    const container = document.getElementById('ingredients-container');

    // LOG 1 : Test de présence des éléments au chargement de la page
    console.log("--- Initialisation du Script ---");
    console.log("Variable btnAdd :", btnAdd);
    console.log("Variable container :", container);

    // Fonction pour ajouter une nouvelle ligne d'ingrédient
    if (btnAdd) {
        btnAdd.addEventListener('click', () => {
            // LOG 2 : Test de l'événement clic
            console.log("Action : Le bouton 'Ajouter' a été cliqué.");

            // Création d'une div pour la nouvelle ligne
            const newRow = document.createElement('div');
            newRow.classList.add('ingredient-row');
            newRow.style.display = 'flex';
            newRow.style.gap = '10px';
            newRow.style.marginBottom = '10px';

            // HTML de la nouvelle ligne (Nom + Quantité)
            newRow.innerHTML = `
                <input type="text" name="ingredients[]" placeholder="Ingrédient" required>
                <input type="text" name="quantities[]" placeholder="Quantité (ex: 200g)">
                <button type="button" class="btn-remove">X</button>
            `;

            container.appendChild(newRow);

            // LOG 3 : Test de la valeur (comptage des lignes créées)
            const count = container.querySelectorAll('.ingredient-row').length;
            console.log("Valeur testée : Nombre total d'ingrédients = " + count);

            // Gestion de la suppression de la ligne
            newRow.querySelector('.btn-remove').addEventListener('click', () => {
                newRow.remove();
                
                // LOG 4 : Test de confirmation après suppression
                const countAfter = container.querySelectorAll('.ingredient-row').length;
                console.log("Action : Ligne supprimée. Nouveau total = " + countAfter);
            });
        });
    } else {
        // LOG de sécurité si le bouton n'est pas trouvé
        console.warn("Attention : Le bouton 'add-ingredient' n'a pas été trouvé dans le HTML.");
    }
});

/* ==========================================================================
   ANIMATION DES CARTES AU SURVOL
   ========================================================================== */
const cards = document.querySelectorAll('.recipe-card');

// LOG 5 : Test de la variable cards (vérifier si le script détecte bien les recettes)
console.log("Animation : " + cards.length + " cartes de recettes détectées.");

cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});