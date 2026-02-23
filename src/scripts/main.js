'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const calcLeft = (wallWidth - spiderWidth) / 2;
const calcTop = (wallHeight - spiderHeight) / 2;

spider.style.left = `${calcLeft}px`;
spider.style.top = `${calcTop}px`;
