'use strict';

const spider = document.querySelector('.spider');

const spiderSizes = spider.getBoundingClientRect();

const wall = document.querySelector('.wall');

spider.style.top = wall.clientHeight / 2 - spiderSizes.height / 2 + 'px';
spider.style.left = wall.clientWidth / 2 - spiderSizes.width / 2 + 'px';
