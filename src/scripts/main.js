'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = `${(getComputedStyle(wall).height.slice(0, -2) / 2)
- (getComputedStyle(spider).height.slice(0, -2) / 2)}px`;

spider.style.left = `${(getComputedStyle(wall).width.slice(0, -2) / 2)
- (getComputedStyle(spider).width.slice(0, -2) / 2)}px`;
