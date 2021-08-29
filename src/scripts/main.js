'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallWidth = parseFloat(getComputedStyle(wall).width);
const wallHeight = parseFloat(getComputedStyle(wall).height);
const spiderLeft = (wallWidth - spider.width) / 2;
const spiderTop = (wallHeight - spider.height) / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
