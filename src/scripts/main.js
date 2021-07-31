'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = parseFloat(getComputedStyle(spider).width);
const spiderHeight = parseFloat(getComputedStyle(spider).height);

spider.style.marginTop = `${wall.clientHeight / 2 - spiderHeight / 2}px`;
spider.style.marginLeft = `${wall.clientWidth / 2 - spiderWidth / 2}px`;
