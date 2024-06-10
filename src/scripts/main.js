'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = (wall.clientWidth - spider.clientWidth) / 2;
const centerY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
// const wall = document.querySelector('.wall');
// const spider = document.querySelector('.spider');

// const wallRect = wall.getBoundingClientRect();
// const spiderRect = spider.getBoundingClientRect();

// const centerX = (wallRect.width - spiderRect.width) / 2;
// const centerY = (wallRect.height - spiderRect.height) / 2;

// spider.style.left = `${centerX}px`;
// spider.style.top = `${centerY}px`;
