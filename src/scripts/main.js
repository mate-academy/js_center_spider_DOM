'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeighht = wall.clientHeight;
const wallWidth = wall.clientWidth;

spider.style.top = wallHeighht / 2 + 'px';
spider.style.left = wallWidth / 2 + 'px';
spider.style.transform = 'translate(-50%, -50%)';
