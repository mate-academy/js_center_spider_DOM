'use strict';

// write code here
const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const wallSize = wall.clientHeight;

const centerPosition = wallSize / 2 - spider.clientHeight / 2;

spider.style.top = `${centerPosition}px`;
spider.style.left = `${centerPosition}px`;
