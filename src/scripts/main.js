'use strict';

const spider = document.querySelector('.spider');
const spiderWall = document.querySelector('.wall');

const positionY = (spiderWall.clientHeight - spider.offsetHeight) / 2;
const positionX = (spiderWall.clientWidth - spider.offsetWidth) / 2;

spider.style.top = `${positionY}px`;
spider.style.left = `${positionX}px`;
