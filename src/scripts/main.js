'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = parseFloat(getComputedStyle(wall).width);
const wallHeight = parseFloat(getComputedStyle(wall).height);

const spiderWidth = parseFloat(getComputedStyle(spider).width);
const spiderHeight = parseFloat(getComputedStyle(spider).height);

spider.style.top = (wallHeight / 2 - spiderHeight / 2) + 'px';
spider.style.left = (wallWidth / 2 - spiderWidth / 2) + 'px';


