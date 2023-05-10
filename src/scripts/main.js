'use strict';

const spider = document.querySelector('.spider');
const wall = spider.offsetParent;

spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
