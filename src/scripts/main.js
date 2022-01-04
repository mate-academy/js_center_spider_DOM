'use strict';

const wallElement = document.querySelector('.wall');
const wallStyle = getComputedStyle(wallElement);
const wallWidth = parseFloat(wallStyle.width);
const wallHeight = parseFloat(wallStyle.height);

const spiderElement = document.querySelector('.spider');
const spiderStyle = getComputedStyle(spiderElement);
const spiderWidth = parseFloat(spiderStyle.width);
const spiderHeight = parseFloat(spiderStyle.height);

spiderElement.style.top = ((wallHeight / 2) - (spiderHeight / 2)) + 'px';

spiderElement.style.left = ((wallWidth / 2) - (spiderWidth / 2)) + 'px';
