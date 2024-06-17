'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldRec = wall.getBoundingClientRect();
const fieldWidth = fieldRec.width;
const fieldHeight = fieldRec.height;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centerX = (fieldWidth - spiderWidth) / 2;
const centerY = (fieldHeight - spiderHeight) / 2;

spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
