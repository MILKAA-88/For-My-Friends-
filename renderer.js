window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById("rickroll");
  const startScreen = document.getElementById("start-screen");
  const videoContainer = document.getElementById("video-container");
  const startBtn = document.getElementById("start-btn");
  const exitBtn = document.getElementById("exit-btn");
  
  const isElectron = navigator.userAgent.toLowerCase().includes('electron');
  
  const lancerVideo = () => {
    startScreen.style.display = "none";
    videoContainer.style.display = "block";
    video.volume = 1.0;
    video.play().catch(err => console.error("Erreur lecture vidéo :", err));
    
    // Empêcher pause
    video.addEventListener("pause", () => video.play());
    // Bloquer clic droit
    document.addEventListener("contextmenu", e => e.preventDefault());
    // Bloquer raccourcis clavier pause
    document.addEventListener("keydown", (e) => {
      if ([" ", "k", "K", "MediaPlayPause"].includes(e.key)) {
        e.preventDefault();
      }
    });
    
    // Affiche le bouton Quitter après 10 secondes
    setTimeout(() => {
      exitBtn.style.display = "block";
    }, 10000);
  };
  
  // Clique sur le bouton Quitter : redirection
  exitBtn.addEventListener("click", () => {
    window.location.href = "2.html";
  });
  
  // ✅ Code secret TOUJOURS actif
  let sequence = "";
  const codeSecret = "milkaa";
  
  window.addEventListener("keydown", (event) => {
    sequence += event.key.toLowerCase();
    
    if (sequence.length > codeSecret.length) {
      sequence = sequence.slice(-codeSecret.length);
    }
    
    if (sequence === codeSecret) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((err) => {
          console.error("Erreur en quittant le plein écran :", err);
        });
      }
    }
  });
  
  // Lancer selon contexte
  if (isElectron) {
    lancerVideo();
  } else {
    startBtn.addEventListener("click", lancerVideo);
  }
});