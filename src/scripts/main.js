'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const leftIndent = (wallWidth - spiderWidth) / 2;
const topIndent = (wallHeight - spiderHeight) / 2;

spider.style.top = `${topIndent}px`;
spider.style.left = `${leftIndent}px`;
