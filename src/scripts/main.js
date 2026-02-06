'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');
const wallWidth = wallElement.offsetWidth;
const wallHeight = wallElement.offsetHeight;
const spiderWidth = spiderElement.offsetWidth;
const spiderHeight = spiderElement.offsetHeight;

const leftPosition = wallWidth / 2 - spiderWidth / 2;
const topPosition = wallHeight / 2 - spiderHeight / 2;

spiderElement.style.left = leftPosition + 'px';
spiderElement.style.top = topPosition + 'px';
