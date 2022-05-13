'use strict';

const spider = document.getElementsByClassName('spider')[0];
const wall = document.getElementsByClassName('wall')[0];

const wallStyles = getComputedStyle(wall);
const spiderStyles = getComputedStyle(spider);
const wallHeight = parseFloat(wallStyles.height);
const wallWidth = parseFloat(wallStyles.width);
const spiderHeight = parseFloat(spiderStyles.height);
const spiderWidth = parseFloat(spiderStyles.height);

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
