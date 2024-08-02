'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallSize = (wall.clientHeight + wall.clientWidth) / 2;
const spiderSize = (spider.clientHeight + spider.clientWidth) / 2;

const positionTop = (wallSize - spiderSize) / 2;
const positionLeft = (wallSize - spiderSize) / 2;

spider.style.top = `${positionTop}px`;
spider.style.left = `${positionLeft}px`;
