const texte = [
  "Initialisation du système...",
  "Connexion à l'utilisateur...",
  "Téléchargement de vos données personnelles...",
  "Erreur : Infiltration d'un système inconnu.",
  "Détection de résistance...",
  "Activation du mode NO-Name...",
  "Tu ne peux plus fuir.",
  "JE SUIS LÀ",
  "NO-NAME",
  "..."
];

const msg = document.getElementById("messages");
const blackout = document.getElementById("blackout");

let i = 0;

function afficherMessage() {
  if (i < texte.length) {
    msg.textContent += texte[i] + "\n";
    
    // Effet dramatique sur "JE SUIS LÀ"
    if (texte[i] === "JE SUIS LÀ") {
      blackout.classList.add("flash-red");
      
      setTimeout(() => {
        blackout.classList.remove("flash-red");
        i++;
        setTimeout(afficherMessage, 1500); // on continue après
      }, 3000); // 3 secondes de clignotement
      
    } else {
      i++;
      setTimeout(afficherMessage, i === 7 ? 2500 : 1500); // petite pause avant "JE SUIS LÀ"
    }
  }
}

// Entrée en plein écran
function activerPleinEcran() {
  const docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullscreen) {
    docElm.webkitRequestFullscreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}

// Bloquer clavier + clics
function bloquerInteraction(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

window.addEventListener("DOMContentLoaded", () => {
  activerPleinEcran();
  afficherMessage();
  
  // Bloquer les interactions
  window.addEventListener("keydown", bloquerInteraction, true);
  window.addEventListener("mousedown", bloquerInteraction, true);
  window.addEventListener("contextmenu", bloquerInteraction, true);
});