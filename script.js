// Script básico para navegação
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
