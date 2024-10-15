'use strict';

// Отримуємо елементи
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Отримуємо розміри блоку wall
const wallRect = wall.getBoundingClientRect();
const wallWidth = wallRect.width;
const wallHeight = wallRect.height;

// Отримуємо розміри елемента spider
const spiderRect = spider.getBoundingClientRect();
const spiderWidth = spiderRect.width;
const spiderHeight = spiderRect.height;

// Обчислюємо позицію для центрування
const spiderX = (wallWidth - spiderWidth) / 2;
const spiderY = (wallHeight - spiderHeight) / 2;

// Встановлюємо позицію для spider
spider.style.left = `${spiderX}px`;
spider.style.top = `${spiderY}px`;
