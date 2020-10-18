'use strict';

// write code here
const wallHeigth = document.querySelector('.wall').clientHeight;
const wallWidth = document.querySelector('.wall').clientWidth;

const spider = document.querySelector('.spider');
const spiderHeigth = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const centerY = (wallHeigth - spiderHeigth) / 2;
const centerX = (wallWidth - spiderWidth) / 2;

spider.style.top = `${centerY}px`;
spider.style.left = `${centerX}px`;
