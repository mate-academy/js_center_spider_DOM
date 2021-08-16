'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerPosition = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.top = `${centerPosition}px`;
spider.style.left = `${centerPosition}px`;
