'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const positonLeft = (wallWidth / 2) - (spiderWidth / 2);
const positonTop = (wallHeight / 2) - (spiderHeight / 2);

spider.style.left = positonLeft + 'px';
spider.style.top = positonTop + 'px';
