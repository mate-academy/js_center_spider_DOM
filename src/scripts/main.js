'use strict';

const wall = document.querySelector('.wall').getBoundingClientRect();
const spider = document.querySelector('.spider');
const spiderRect = spider.getBoundingClientRect();

spider.style.left = (wall.width - spiderRect.width) / 2 + 'px';
spider.style.top = (wall.height - spiderRect.height) / 2 + 'px';
