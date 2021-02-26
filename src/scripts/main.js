'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const heightToCenter = (wall.clientHeight - spider.offsetHeight) / 2;
const widthToCenter = (wall.clientWidth - spider.offsetWidth) / 2;

spider.style.top = heightToCenter + 'px';
spider.style.left = widthToCenter + 'px';
