'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const startTopS = spider.getBoundingClientRect().top + window.pageYOffset;
const startLeftS = spider.getBoundingClientRect().left + window.pageYOffset;
const wallWidth = wall.getBoundingClientRect().width + window.pageYOffset;
const spiderWidth = spider.getBoundingClientRect().width + window.pageYOffset;

const wallHeight = wall.getBoundingClientRect().height + window.pageXOffset;
const spiderHeight = spider.getBoundingClientRect().height + window.pageXOffset;
const coorsX = startTopS + (wallHeight / 2) - spiderHeight - 10;

spider.style.top = coorsX + 'px';

const coorsY = startLeftS + (wallWidth / 2) - spiderWidth - 10;

spider.style.left = coorsY + 'px';
