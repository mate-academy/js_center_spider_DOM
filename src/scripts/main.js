'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const midWidth = (wall.clientWidth - spider.offsetWidth) / 2;
const midHeight = (wall.clientHeight - spider.offsetHeight) / 2;

spider.style.top = `${midHeight}px`;
spider.style.left = `${midWidth}px`;
