'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallCenterX = (wall.clientWidth / 2) - (spider.clientWidth / 2);
const wallCenterY = (wall.clientHeight / 2) - (spider.clientHeight / 2);

spider.style.top = `${wallCenterY}px`;
spider.style.left = `${wallCenterX}px`;
