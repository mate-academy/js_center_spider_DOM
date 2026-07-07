'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centeredWidth = (wallWidth - spiderWidth) / 2;
const centeredHeight = (wallHeight - spiderHeight) / 2;

spider.style.left = `${centeredWidth}px`;
spider.style.top = `${centeredHeight}px`;
