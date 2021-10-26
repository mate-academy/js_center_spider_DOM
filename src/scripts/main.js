'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidthCenter = wall.clientWidth / 2;
const wallHightCenter = wall.clientHeight / 2;

const spiderWidth = spider.getBoundingClientRect().width / 2;
const spiderHight = spider.getBoundingClientRect().height / 2;

spider.style.left = `${wallWidthCenter - spiderWidth}px`;
spider.style.top = `${wallHightCenter - spiderHight}px`;
