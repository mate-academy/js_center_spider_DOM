'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallCenter = wall.clientWidth / 2;
const spiderCenter = spider.offsetWidth / 2;

spider.style.top = `${wallCenter - spiderCenter}px`;
spider.style.left = `${wallCenter - spiderCenter}px`;
