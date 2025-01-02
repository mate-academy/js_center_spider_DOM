'use strict';

const nodeWall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallCenterX = nodeWall.clientWidth / 2;
const wallCenterY = nodeWall.clientHeight / 2;

const spiderX = wallCenterX - spider.clientWidth / 2;
const spiderY = wallCenterY - spider.clientHeight / 2;

spider.style.left = `${spiderX}px`;
spider.style.top = `${spiderY}px`;
