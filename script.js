// MACHINE À ÉCRIRE
const phrases = ["Pierre Burnier", "Étudiant", "Développeur Web"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let typing = true;
const typingSpeed = 100; // Vitesse de frappe
const erasingSpeed = 150; // Vitesse de suppression
const delayBetweenPhrases = 2000; // Délai entre les phrases
const typingElement = document.getElementById("typing-effect");

// Fonction pour lancer l'effet de machine à écrire
function typeEffect() {
    if (typing) {
        // Ajouter un caractère à la fois
        typingElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        if (currentCharIndex === phrases[currentPhraseIndex].length) {
            typing = false;
            setTimeout(typeEffect, delayBetweenPhrases); // Délai avant d'effacer
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    } else {
        // Effacer un caractère à la fois
        typingElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        if (currentCharIndex === 0) {
            typing = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Passer à la phrase suivante
        }
        setTimeout(typeEffect, erasingSpeed);
    }
}

// Lancer l'effet
typeEffect();

// EFFET DE LUEUR SUR LA SOURIS
const mouseGlow = document.getElementById("mouse-glow");

document.addEventListener("mousemove", (e) => {
    // Utilise pageX et pageY pour obtenir les coordonnées absolues de la souris
    mouseGlow.style.left = `${e.pageX}px`;
    mouseGlow.style.top = `${e.pageY}px`;
});



// NB CARACTERES CHAMP MESSAGE
const messageInput = document.getElementById('message');
const charCount = document.getElementById('char-count');

messageInput.addEventListener('input', () => {
    charCount.textContent = messageInput.value.length;
});



// Récupération des éléments
const openPopupLink = document.getElementById('open-popup'); // Lien dans le paragraphe
const openPopupButton = document.getElementById('open-popup-button'); // Bouton "INFOS STAGE"
const closePopup = document.getElementById('close-popup'); // Bouton de fermeture
const popup = document.getElementById('popup'); // Conteneur de la pop-up

// Fonction pour afficher la pop-up
function showPopup(event) {
    event.preventDefault(); // Empêche l'action par défaut (navigation ou soumission)
    popup.style.display = 'flex'; // Affiche la pop-up
}

// Fonction pour cacher la pop-up
function hidePopup() {
    popup.style.display = 'none'; // Cache la pop-up
}

// Ouverture de la pop-up via le lien
openPopupLink.addEventListener('click', showPopup);

// Ouverture de la pop-up via le bouton
openPopupButton.addEventListener('click', showPopup);

// Fermeture de la pop-up via la croix
closePopup.addEventListener('click', hidePopup);

// Fermeture de la pop-up en cliquant en dehors du contenu
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        hidePopup();
    }
});


