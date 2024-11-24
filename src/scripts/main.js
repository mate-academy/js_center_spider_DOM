'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientWidth / 2;
const wallWidth = wall.clientWidth / 2;
const spiderHeight = spider.clientWidth / 2;
const spiderWidth = spider.clientWidth / 2;

spider.style.top = `${wallHeight - spiderHeight}px`;
spider.style.left = `${wallWidth - spiderWidth}px`;
