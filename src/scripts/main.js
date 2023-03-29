'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderStyle = getComputedStyle(spider);
const wallStyle = getComputedStyle(wall);

const wallWidth = parseFloat(wallStyle.width);
const spiderWidth = parseFloat(spiderStyle.width);

const centerPosition = `${(0.5 * wallWidth) - (0.5 * spiderWidth)}px`;

spider.style.left = centerPosition;
spider.style.top = centerPosition;
