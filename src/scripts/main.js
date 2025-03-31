'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (wall && spider) {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    // Обчислення центрованої позиції
    const centerX = wallRect.width / 2 - spiderRect.width / 2;
    const centerY = wallRect.height / 2 - spiderRect.height / 2;

    // Встановлення позиції павука
    spider.style.position = 'absolute';
    spider.style.top = `${centerY}px`;
    spider.style.left = `${centerX}px`;
  }
});
