'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderX = spider.clientWidth;
const spiderY = spider.clientHeight;
const wallX = wall.clientWidth;
const wallY = wall.clientHeight;
const centreX = wallX / 2 - spiderX / 2;
const centreY = wallY / 2 - spiderY / 2;

spider.style.top = centreX + 'px';
spider.style.left = centreY + 'px';
