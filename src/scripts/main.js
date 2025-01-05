'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const wallCenterX = wallRect.width / 2;
const wallCenterY = wallRect.height / 2;

const spiderReact = spider.getBoundingClientRect();
const spiderWidth = spiderReact.width;
const spiderHeight = spiderReact.height;

spider.style.position = 'absolute';
spider.style.left = `${wallCenterX - spiderWidth / 2}px`;
spider.style.top = `${wallCenterY - spiderHeight / 2}px`;
