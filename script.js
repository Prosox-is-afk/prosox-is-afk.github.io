const phrases = ["Pierre Burnier", "Étudiant en Informatique", "Développeur Web"];
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


const mouseGlow = document.getElementById("mouse-glow");

document.addEventListener("mousemove", (e) => {
    // Utilise pageX et pageY pour obtenir les coordonnées absolues de la souris
    mouseGlow.style.left = `${e.pageX}px`;
    mouseGlow.style.top = `${e.pageY}px`;
});




const messageInput = document.getElementById('message');
const charCount = document.getElementById('char-count');

messageInput.addEventListener('input', () => {
    charCount.textContent = messageInput.value.length;
});
