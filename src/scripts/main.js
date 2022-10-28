'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallHeight = parseFloat(getComputedStyle(wall).height);
const wallWidth = parseFloat(getComputedStyle(wall).width);
const spiderHeight = parseFloat(getComputedStyle(spider).height);
const spiderWidth = parseFloat(getComputedStyle(spider).width);

spider.style.cssText = `top: ${wallHeight / 2 - spiderHeight / 2
}px; left: ${wallWidth / 2 - spiderWidth / 2}px`;
