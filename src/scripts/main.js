'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Переконаймося, що стилі позиціонування працюватимуть
wall.style.position = 'relative';
spider.style.position = 'absolute';

// Отримуємо розміри контейнера і павука
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

// Обчислюємо координати для центрування
const left = (wall.clientWidth - spider.clientWidth) / 2;
const top = (wall.clientHeight - spider.clientHeight) / 2;

// Встановлюємо позицію павука
spider.style.left = `${left}px`;
spider.style.top = `${top}px`;

