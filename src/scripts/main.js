'use strict';

const wallHeight = document.querySelector('.wall').clientHeight;
const wallWidth = document.querySelector('.wall').clientWidth;

const spider = document.querySelector('.spider');
const spiderHeight = spider.getBoundingClientRect().height;
const spiderWidth = spider.getBoundingClientRect().width;

spider.style.left = wallWidth / 2 - spiderWidth / 2 + 'px';
spider.style.top = wallHeight / 2 - spiderHeight / 2 + 'px';
