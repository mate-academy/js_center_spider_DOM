'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const topp = (wallHeight - spiderHeight) / 2;
const left = (wallWidth - spiderWidth) / 2;

spider.style.top = `${topp}px`;
spider.style.left = `${left}px`;
