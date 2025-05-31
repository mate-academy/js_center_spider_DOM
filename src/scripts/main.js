'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const spiderLeft = (wallWidth - spiderWidth) / 2;
const spiderTop = (wallHeight - spiderHeight) / 2;

spider.style.left = `${spiderLeft}px`;
spider.style.top = `${spiderTop}px`;
