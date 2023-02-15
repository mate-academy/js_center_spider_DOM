'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallStyles = getComputedStyle(wall);
const spiderStyles = getComputedStyle(spider);

const wallWidth = parseFloat(wallStyles.width);
const wallHeight = parseFloat(wallStyles.height);
const spiderWidth = parseFloat(spiderStyles.width);
const spiderHeight = parseFloat(spiderStyles.height);

const spiderTop = (wallHeight / 2) - (spiderHeight / 2);
const spiderLeft = (wallWidth / 2) - (spiderWidth / 2);

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
