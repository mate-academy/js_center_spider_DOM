'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = window.getComputedStyle(wall).width;
const spiderWidth = window.getComputedStyle(spider).width;

const wallHeight = window.getComputedStyle(wall).height;
const spiderHeight = window.getComputedStyle(spider).height;

const centerWidth = (parseFloat(wallWidth) - parseFloat(spiderWidth)) / 2;
const centerHeight = (parseFloat(wallHeight) - parseFloat(spiderHeight)) / 2;

spider.style.left = `${centerWidth}px`;
spider.style.top = `${centerHeight}px`;
