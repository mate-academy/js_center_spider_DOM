'use strict';

// write code here
window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Робимо, щоб позиціювання працювало
  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  // Отримуємо розміри
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  // Розрахунок координат центру
  const leftPos = (wallWidth - spiderWidth) / 2;
  const topPos = (wallHeight - spiderHeight) / 2;

  // Застосовуємо координати
  spider.style.left = `${leftPos}px`;
  spider.style.top = `${topPos}px`;
});
