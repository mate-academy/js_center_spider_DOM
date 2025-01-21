'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRec = wall.getBoundingClientRect();
const spiderRec = spider.getBoundingClientRect();

const centerX = (wallRec.width - spiderRec.width) / 2;
const centerY = (wallRec.height - spiderRec.height) / 2;

spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
