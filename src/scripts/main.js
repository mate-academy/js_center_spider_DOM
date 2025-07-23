'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const left = (wallWidth - spiderWidth) / 2;
const top = (wallHeight - spiderHeight) / 2;

spider.style.left = `${left}px`;
spider.style.top = `${top}px`;
spider.style.position = 'absolute'; 