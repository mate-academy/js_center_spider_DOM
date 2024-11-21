'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const leftPx = (wallWidth - spiderWidth) / 2;
const topPx = (wallHeight - spiderHeight) / 2;

// Застосовуємо обчислену позицію до павука
spider.style.position = 'absolute';
spider.style.left = `${leftPx}px`;
spider.style.top = `${topPx}px`;
