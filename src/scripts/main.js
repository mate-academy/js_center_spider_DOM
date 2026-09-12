'use strict';

// write code here
const spider = document.querySelector('.spider');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wall = spider.offsetParent;

spider.style.left = `${(wall.clientWidth - spiderWidth) / 2}px`;
spider.style.top = `${(wall.clientHeight - spiderHeight) / 2}px`;
