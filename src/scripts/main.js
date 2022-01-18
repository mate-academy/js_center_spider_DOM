'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallHeight = parseFloat(wall.clientHeight);
const wallWidth = parseFloat(wall.clientWidth);
const spiderHeight = parseFloat(spider.offsetHeight);
const spiderWidth = parseFloat(spider.offsetWidth);

spider.style.top = (wallHeight / 2 - spiderHeight / 2) + 'px';
spider.style.left = (wallWidth / 2 - spiderWidth / 2) + 'px';
