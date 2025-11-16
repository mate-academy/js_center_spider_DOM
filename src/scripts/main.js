'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const SpiderLeft = (wallWidth - spiderWidth) / 2;
const SpiderTop = (wallHeight - spiderHeight) / 2;

spider.style.top = `${SpiderTop}px`;
spider.style.left = `${SpiderLeft}px`;
