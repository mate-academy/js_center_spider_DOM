'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

spider.style.top = (wallWidth / 2) - (spiderWidth / 2) + 'px';
spider.style.left = (wallHeight / 2) - (spiderHeight / 2) + 'px';


