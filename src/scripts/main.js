'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const offsetX = (wallWidth - spiderWidth) / 2;
const offsetY = (wallHeight - spiderHeight) / 2;

spider.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
