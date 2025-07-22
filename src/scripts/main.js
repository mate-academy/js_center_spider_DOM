'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topCorner = (wall.clientHeight - spider.clientHeight) / 2;
const left = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.position = 'absolute';
spider.style.top = `${topCorner}px`;
spider.style.left = `${left}px`;
