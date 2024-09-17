'use strict';

const background = document.getElementsByClassName('wall')[0];
const backHeight = parseFloat(getComputedStyle(background).height);
const spider = document.getElementsByClassName('spider')[0];

const spiderHeight = parseFloat(getComputedStyle(spider).height);

spider.style.top = `${backHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${backHeight / 2 - spiderHeight / 2}px`;
