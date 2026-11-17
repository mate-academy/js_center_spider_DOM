'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderLeft = wall.clientWidth / 2 - spider.clientWidth / 2;
const spiderTop = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.left = spiderLeft + 'px';
spider.style.top = spiderTop + 'px';

// write code here
