'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

const forLeft = (wall.clientWidth - spider.clientWidth) / 2;
const forTop = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${forLeft}px`;
spider.style.top = `${forTop}px`;
