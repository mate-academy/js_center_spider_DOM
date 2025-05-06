'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const left = (wall.clientWidth - spider.clientWidth) / 2;
const top1 = (wall.clientHeight - spider.clientHeight) / 2;

// Устанавливаем позицию
spider.style.position = 'absolute';
spider.style.left = `${left}px`;
spider.style.top = `${top1}px`;
