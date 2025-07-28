'use strict';

const spiderElement = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

const containerHeight = parseFloat(getComputedStyle(wallElement).height);
const containerWidth = parseFloat(getComputedStyle(wallElement).width);

const spiderHeight = parseFloat(getComputedStyle(spiderElement).height);
const spiderWidth = parseFloat(getComputedStyle(spiderElement).width);

spiderElement.style.top = (containerHeight - spiderHeight) / 2 + 'px';
spiderElement.style.left = (containerWidth - spiderWidth) / 2 + 'px';
