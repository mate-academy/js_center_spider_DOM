window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Upewniamy się, że pająk jest absolutnie pozycjonowany
  spider.style.position = 'absolute';

  // Obliczamy środek
  const centerX = (wall.clientWidth - spider.clientWidth) / 2;
  const centerY = (wall.clientHeight - spider.clientHeight) / 2;

  // Ustawiamy pozycję
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
});

