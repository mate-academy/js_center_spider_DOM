'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = wall.clientWidth / 2 + 'px';
spider.style.left = wall.clientHeight / 2 + 'px';
spider.style.transform = 'translate(-50%, -50%)';
