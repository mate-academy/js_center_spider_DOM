'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallStyles = getComputedStyle(wall);
const wallHeight = parseInt(wallStyles.height);
const wallWidth = parseInt(wallStyles.width);

const spiderStyles = getComputedStyle(spider);
const spiderHeight = parseInt(spiderStyles.height);
const spiderWidth = parseInt(spiderStyles.width);

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
