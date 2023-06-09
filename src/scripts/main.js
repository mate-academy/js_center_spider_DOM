'use strict';

const spider = document.querySelector('.spider');
const wall = spider.offsetParent;

const moveY = (wall.clientHeight - spider.offsetHeight) / 2;
const moveX = (wall.clientWidth - spider.offsetWidth) / 2;

spider.style.top = moveX + 'px';
spider.style.left = moveY + 'px';
