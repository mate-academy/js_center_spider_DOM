'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const parentWidth = wall.offsetWidth;
const parentHeight = wall.offsetHeight;
const childWidth = spider.offsetWidth;
const childHeight = spider.offsetHeight;

spider.style.cssText = `
top: ${(parentWidth - childWidth) / 2}px;
left: ${(parentHeight - childHeight) / 2}px;
`;
