'use strict';

// write code here
window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Якщо елементи не знайдено — припиняємо виконання
  if (!wall || !spider) {
    return;
  }

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const leftPos = (wallWidth - spiderWidth) / 2;
  const topPos = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${leftPos}px`;
  spider.style.top = `${topPos}px`;

  // (Необов’язково) повторне центрування при зміні розміру
  window.addEventListener('resize', () => {
    const newLeft = (wall.clientWidth - spider.clientWidth) / 2;
    const newTop = (wall.clientHeight - spider.clientHeight) / 2;

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
