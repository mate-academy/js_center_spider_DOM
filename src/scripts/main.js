'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWeight = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWeight = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const posLeft = (wallWeight - spiderWeight) / 2;
const posTop = (wallHeight - spiderHeight) / 2;

spider.style.position = 'absolute';
spider.style.left = posLeft + 'px';
spider.style.top = posTop + 'px';
