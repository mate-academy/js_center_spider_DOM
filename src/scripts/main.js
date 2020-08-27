'use strict';

const spider = document.querySelector('.spider');
const spiderSize = window.getComputedStyle(spider).width.slice(0, -2);
const wall = document.querySelector('.wall');
const wallSize = window.getComputedStyle(wall).width.slice(0, -2);
const center = (wallSize / 2) - (spiderSize / 2);

spider.style.position = 'absolute';
spider.style.top = `${center}px`;
spider.style.left = `${center}px`;
