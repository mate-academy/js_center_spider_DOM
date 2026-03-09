'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const positionLeft = (wallWidth - spiderWidth) / 2;
const positionTop = (wallHeight - spiderHeight) / 2;

spider.style.left = `${positionLeft}px`;
spider.style.top = `${positionTop}px`;
