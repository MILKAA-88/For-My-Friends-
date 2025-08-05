window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('rickroll');
  video.volume = 1.0;
  video.play().catch(err => console.error('Erreur lecture vidéo:', err));
});