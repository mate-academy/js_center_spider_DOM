'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const half = wall.clientWidth / 2 + 'px';

spider.style.left = half;
spider.style.top = half;
spider.style.transform = 'translate(-50%, -50%)';
