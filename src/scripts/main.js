'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const startTopS = spider.getBoundingClientRect().top + window.pageYOffset;
const startLeftS = spider.getBoundingClientRect().left + window.pageYOffset;
const wallWidth = wall.getBoundingClientRect().width + window.pageXOffset;
const spiderWidth = spider.getBoundingClientRect().width + window.pageXOffset;

const wallHeight = wall.getBoundingClientRect().height + window.pageXOffset;
const coorsX = startTopS + (wallHeight / 2);

spider.style.top = coorsX / 2 + 'px';

const coorsY = startLeftS + (wallWidth / 2) + spiderWidth;

spider.style.left = coorsY / 2 + 'px';
