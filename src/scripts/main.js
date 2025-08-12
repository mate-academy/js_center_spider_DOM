'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Получение размеров
const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

// Вычисление центра
const spiderTop = (wallHeight - spiderHeight) / 2;
const spiderLeft = (wallWidth - spiderWidth) / 2;

// Установка стилей
spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
