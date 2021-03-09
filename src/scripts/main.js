'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = parseInt(spider.clientWidth);
const spiderHeight = parseInt(spider.clientHeight);

const wallWidth = parseInt(wall.clientWidth);
const wallHeight = parseInt(wall.clientHeight);

spider.style.top = wallHeight / 2 - spiderHeight / 2 + 'px';

spider.style.left = wallWidth / 2 - spiderWidth / 2 + 'px';
