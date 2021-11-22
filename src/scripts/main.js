'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = parseFloat(getComputedStyle(wall).width);
const wallHeight = parseFloat(getComputedStyle(wall).height);
const spiderWidth = parseFloat(getComputedStyle(spider).width);
const spiderHeight = parseFloat(getComputedStyle(spider).height);

spider.style.top = `${wallWidth / 2 - spiderWidth / 2}px`;
spider.style.left = `${wallHeight / 2 - spiderHeight / 2}px`;
