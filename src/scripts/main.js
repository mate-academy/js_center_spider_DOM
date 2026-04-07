'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centerTop = (wallHeight - spiderHeight) / 2;
const centerLeft = (wallWidth - spiderWidth) / 2;

spider.style.position = 'absolute';
spider.style.top = `${centerTop}px`;
spider.style.left = `${centerLeft}px`;
