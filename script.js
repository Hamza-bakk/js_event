// Fonctionnalité N°1 Bis
// Récupérer le footer
let footer = document.querySelector('footer');

// Initialiser le compteur de clics
let clickCount = 0;

// Ajouter un écouteur d'événement "click" au footer
footer.addEventListener('click', function() {
    // Incrémenter le compteur de clics
    clickCount++;
    
    // Afficher le message avec le nombre de clics
    console.log('clic numéro ' + clickCount);
});
// ----------------------------------------------------------------------------------------//

// Fonctionnalité N°2
// Récupérer le bouton hamburger
let hamburgerButton = document.querySelector('.navbar-toggler');

// Récupérer l'élément avec l'ID navbarHeader
let navbarHeader = document.getElementById('navbarHeader');

// Ajouter un écouteur d'événement "click" au bouton hamburger
hamburgerButton.addEventListener('click', function() {
    // Toggle la classe "collapse" sur l'élément navbarHeader
    navbarHeader.classList.toggle('collapse');
});

// ----------------------------------------------------------------------------------------//

// Fonctionnalité N°3
// Récupérer la première card

let firstCard = document.querySelectorAll('.card')[0];

// Récupérer le bouton "Edit" de la première card
let editButtonFirstCard = firstCard.querySelector('.btn-outline-secondary');

// Récupérer l'élément de texte de la première card
let firstCardText = firstCard.querySelector('.card-text');

// Ajouter un écouteur d'événement "click" au bouton "Edit" de la première card
editButtonFirstCard.addEventListener('click', function() {
    firstCardText.style.color = 'red'; // Changer la couleur du texte en rouge
});


// ----------------------------------------------------------------------------------------//

// Fonctionnalité N°4

// Récupérer le bouton "Edit" de la deuxième card
let editButtonSecondCard = document.querySelectorAll('.card-body')[1].querySelector('.btn-outline-secondary');

// Récupérer l'élément de texte de la deuxième card
let secondCardText = document.querySelectorAll('.card-body')[1].querySelector('.card-text');

// Ajouter un écouteur d'événement "click" au bouton "Edit"
editButtonSecondCard.addEventListener('click', function() {
    if (secondCardText.style.color === 'green') {
        secondCardText.style.color = ''; // Remettre la couleur par défaut
    } else {
        secondCardText.style.color = 'green'; // Changer la couleur en vert
    }
});

// ----------------------------------------------------------------------------------------//

// Fonctionnalité N°5
// Récupérer le lien vers la feuille de style Bootstrap
let bootstrapStylesheet = document.querySelector('link[href*="bootstrap.min.css"]');

// Variable pour suivre l'état du style
let stylesDisabled = false;

// Ajouter un écouteur d'événement "dblclick" à la navbar
let navbar = document.querySelector('.navbar');
navbar.addEventListener('dblclick', function() {
    if (stylesDisabled) {
        // Réactiver la feuille de style Bootstrap
        bootstrapStylesheet.removeAttribute('disabled');
        stylesDisabled = false;
    } else {
        // Désactiver la feuille de style Bootstrap
        bootstrapStylesheet.setAttribute('disabled', 'true');
        stylesDisabled = true;
    }
});

// ----------------------------------------------------------------------------------------//

// Fonctionnalité N°6
// Récupérer tous les boutons "View"
let viewButtons = document.querySelectorAll('.btn-success');

// Parcourir tous les boutons "View"
for (let i = 0; i < viewButtons.length; i++) {
    let viewButton = viewButtons[i];
    
    // Ajouter un écouteur d'événement "mouseover" à chaque bouton "View"
    viewButton.addEventListener('mouseover', function() {
        // Récupérer la card parente du bouton "View"
        let card = viewButton.closest('.card');
        
        // Ajouter une classe pour appliquer le style de réduction à la card
        card.classList.add('reduced-card');
    });
    
    // Ajouter un écouteur d'événement "mouseout" à chaque bouton "View"
    viewButton.addEventListener('mouseout', function() {
        // Récupérer la card parente du bouton "View"
        let card = viewButton.closest('.card');
        
        // Supprimer la classe de réduction pour rétablir le style initial
        card.classList.remove('reduced-card');
    });
}

// ----------------------------------------------------------------------------------------//

// Fonctionnalité N°7
// Récupérer le bouton "==" et la liste des cards
let moveButton = document.querySelector('.btn-secondary');
let cardsContainer = document.querySelectorAll('.row');

// Ajouter un écouteur d'événement au bouton "==>"
moveButton.addEventListener('click', function() {
    // Récupérer la dernière card et son parent
    let lastCard = cardsContainer[1].lastElementChild;
    
    // Déplacer la dernière card au début du parent (avant le premier élément)
    cardsContainer[1].insertBefore(lastCard, cardsContainer[1].firstElementChild);
});

// ----------------------------------------------------------------------------------------//

// Fonctionnalité N°8

let reverseButton = document.querySelector('.btn-primary');

reverseButton.addEventListener('click', function() {
    // Récupérer la première card et son parent
    let firstCard = cardsContainer[1].firstElementChild;
    
    // Déplacer la première card à la fin du parent (après le dernier élément)
    cardsContainer[1].appendChild(firstCard);
});

// ----------------------------------------------------------------------------------------//

// Fonctionnalité N°9


let logo = document.querySelector('.navbar-brand');

// Ajouter un écouteur d'événement pour le logo
logo.addEventListener('keypress', function(event) {
    // Retirer toutes les classes du <body>
    document.body.classList.remove('col-4', 'offset-md-4', 'offset-md-8');
    
    // Vérifier la touche pressée
    if (event.key === 'a') {
        document.body.classList.add('col-4');
    } else if (event.key === 'y') {
        document.body.classList.add('col-4', 'offset-md-4');
    } else if (event.key === 'p') {
        document.body.classList.add('col-4', 'offset-md-8');
    } else if (event.key === 'b') {
    }
});


