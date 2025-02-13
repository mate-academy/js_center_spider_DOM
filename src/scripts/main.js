'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderStyle = document.querySelector('.spider').style;

spiderStyle.top = `${wall.clientHeight / 2 - spider.clientHeight / 2}px`;
spiderStyle.left = `${wall.clientWidth / 2 - spider.clientWidth / 2}px`;
