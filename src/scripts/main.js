'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const marginTop = (wallHeight - spiderHeight) / 2;
const marginLeft = (wallWidth - spiderWidth) / 2;

spider.style.top = `${marginTop}px`;
spider.style.left = `${marginLeft}px`;
