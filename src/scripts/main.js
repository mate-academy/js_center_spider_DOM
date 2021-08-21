'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderCoords = spider.offsetWidth / 2;
const wallCoords = wall.clientWidth / 2;

spider.style.top = `${wallCoords - spiderCoords}px`;
spider.style.left = spider.style.top;
