'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const widthWall = getComputedStyle(wall);

spider.style.top = `${parseFloat(widthWall.height) / 2}px`;
spider.style.left = `${parseFloat(widthWall.width) / 2}px`;
spider.style.transform = 'translate(-50%, -50%)';
