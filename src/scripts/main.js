'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  // Отримуємо розміри елемента павука
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Обчислюємо позиції для центрування
  const leftPosition = (wallWidth - spiderWidth) / 2;
  const topPosition = (wallHeight - spiderHeight) / 2;

  // Застосовуємо стилі для центрування
  spider.style.position = 'absolute';
  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
}

window.onload = centerSpider;
