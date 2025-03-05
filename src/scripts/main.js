'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const middlePosition = (wall.clientWidth - 50 + wall.clientHeight - 50) / 4;

spider.style.top = middlePosition + 'px';
spider.style.left = middlePosition + 'px';
