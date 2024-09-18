'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const spiderTop = (wallHeight - spiderHeight) / 2;
const spiderLeft = (wallWidth - spiderWidth) / 2;

spider.style.position = 'absolute';
spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
