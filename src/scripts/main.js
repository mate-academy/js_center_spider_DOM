'use strict';

const parentOfSpider = document.querySelector('.wall');
const parentStyles = getComputedStyle(parentOfSpider);
const parentWidth = `${parseFloat(parentStyles.width)}`;
const parentHeight = `${parseFloat(parentStyles.height)}`;

const spider = document.querySelector('.spider');
const spiderStyles = getComputedStyle(spider);
const spiderWidth = `${parseFloat(spiderStyles.width)}`;
const spiderHeight = `${parseFloat(spiderStyles.height)}`;

spider.style.top = `${parentHeight
- ((parentHeight * 0.5) + (spiderHeight * 0.5))}px`;

spider.style.left = `${parentWidth
- ((parentWidth * 0.5) + (spiderWidth * 0.5))}px`;
