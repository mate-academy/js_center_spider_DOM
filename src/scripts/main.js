'use strict';

// - Поле имеет класс `wall`.
// - Изображение паука имеет класс `spider`.

const wall = document.querySelector('.wall');
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const x = (wallWidth - spiderWidth) / 2;
const y = (wallHeight - spiderHeight) / 2;

spider.style.left = x + 'px';
spider.style.top = y + 'px';
