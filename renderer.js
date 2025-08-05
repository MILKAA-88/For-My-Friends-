window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById("rickroll");
  const startScreen = document.getElementById("start-screen");
  const videoContainer = document.getElementById("video-container");
  const startBtn = document.getElementById("start-btn");
  const exitBtn = document.getElementById("exit-btn");
  
  const lancerVideo = () => {
    startScreen.style.display = "none";
    videoContainer.style.display = "block";
    video.volume = 1.0;
    video.play().catch(err => console.error("Erreur lecture vidéo :", err));
    
    video.addEventListener("pause", () => video.play());
    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("keydown", (e) => {
      if ([" ", "k", "K", "MediaPlayPause"].includes(e.key)) {
        e.preventDefault();
      }
    });
    
    setTimeout(() => {
      exitBtn.style.display = "block";
    }, 10000);
  };
  
  // Toujours déclenché par le bouton
  startBtn.addEventListener("click", lancerVideo);
  
  exitBtn.addEventListener("click", () => {
    window.location.href = "2.html";
  });
  
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
});