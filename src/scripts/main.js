'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Робимо павука позиціонованим елементом
spider.style.position = 'absolute';

// Обчислюємо центр
const centerX = (wall.clientWidth - spider.clientWidth) / 2;
const centerY = (wall.clientHeight - spider.clientHeight) / 2;

// Встановлюємо координати
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
