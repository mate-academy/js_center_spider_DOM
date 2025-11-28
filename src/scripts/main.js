'use strict';

const wall = document.querySelector('.wall');
const spider = wall.children[0];

spider.style.position = 'absolute';

const centerX = (wall.offsetWidth - spider.offsetWidth) / 2;
const centerY = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
