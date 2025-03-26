'use strict';

// write code here
document.addEventListener('DOMContentLoaded', function () {
  const wall = document.querySelector('.wall'); // Знаходимо контейнер
  const spider = document.querySelector('.spider'); // Знаходимо павука

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const centerX = (wallRect.width - spiderRect.width) / 2;
  const centerY = (wallRect.height - spiderRect.height) / 2;

  // Задаємо нові координати
  spider.style.position = 'absolute'; // Робимо павука позиціонованим
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
});
