'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallCoords = wall.getBoundingClientRect();
const spiderCoords = spider.getBoundingClientRect();

const wallCenterX = wallCoords.width / 2;
const wallCenterY = wallCoords.height / 2;

const spiderCenterX = wallCenterX - spiderCoords.width / 2;
const spiderCenterY = wallCenterY - spiderCoords.height / 2;

spider.style.position = 'absolute';
spider.style.top = `${spiderCenterY}px`;
spider.style.left = `${spiderCenterX}px`;
