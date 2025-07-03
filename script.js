// Exemplo simples de interatividade com JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const videoSection = document.querySelector('#video-aulas');
  videoSection.addEventListener('click', () => {
    alert('Você clicou na seção de Vídeos Aulas!');
  });
});
