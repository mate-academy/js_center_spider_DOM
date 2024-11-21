'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

//  отримую розміри поля
const wallwWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

// отримую розміри павука
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

// разую координати для центрування
const centerX = (wallwWidth - spiderWidth) / 2;
const centerY = (wallHeight - spiderHeight) / 2;

// встаговлюю стилі по центру
spider.style.position = 'absolute';
spider.style.top = `${centerX}px`;
spider.style.left = `${centerY}px`;
