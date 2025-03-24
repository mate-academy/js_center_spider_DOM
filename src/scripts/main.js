'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderHeight = (wall.clientHeight - spider.clientHeight) / 2;
const spiderWidth = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${spiderWidth}px`;
spider.style.left = `${spiderHeight}px`;
