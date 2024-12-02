'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderTop = wall.clientWidth / 2 - spider.clientWidth / 2 + 'px';
const spiderLeft = wall.clientHeight / 2 - spider.clientHeight / 2 + 'px';

spider.style.top = spiderTop;
spider.style.left = spiderLeft;
