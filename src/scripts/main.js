'use strict';

// Знаходимо елемент стіни
const wall = document.querySelector('.wall');

// Знаходимо елемент павука
const spider = document.querySelector('.spider');

// Отримуємо ширину та висоту стіни
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

// Отримуємо ширину та висоту павука
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

// Обчислюємо координату X для центрування по горизонталі
// (ширина стіни - ширина павука) / 2
const centerX = (wallWidth - spiderWidth) / 2;

// Обчислюємо координату Y для центрування по вертикалі
// (висота стіни - висота павука) / 2
const centerY = (wallHeight - spiderHeight) / 2;

// Встановлюємо павуку позицію зліва (по осі X)
spider.style.left = `${centerX}px`;

// Встановлюємо павуку позицію зверху (по осі Y)
spider.style.top = `${centerY}px`;
