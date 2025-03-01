'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = spider.getBoundingClientRect();

const spiderX = (wall.clientWidth - spiderSize.width) / 2;
const spiderY = (wall.clientHeight - spiderSize.height) / 2;

spider.style.left = `${spiderX}px`;
spider.style.top = `${spiderY}px`;
