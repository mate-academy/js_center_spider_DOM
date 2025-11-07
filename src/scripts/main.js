'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');
const wallHeight = wallElement.offsetHeight;
const wallWidth = wallElement.offsetWidth;
const spiderHeight = spiderElement.offsetHeight;
const spiderWidth = spiderElement.offsetWidth;

const positionTop = (wallHeight - spiderHeight) / 2;
const positionLeft = (wallWidth - spiderWidth) / 2;

spiderElement.style.top = positionTop + 'px';
spiderElement.style.left = positionLeft + 'px';
