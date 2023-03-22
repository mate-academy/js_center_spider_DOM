'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

const wallWidth = parseInt(getComputedStyle(wallElement).width);
const spiderWidth = parseInt(getComputedStyle(spiderElement).width);

const wallHeight = parseInt(getComputedStyle(wallElement).height);
const spiderHeight = parseInt(getComputedStyle(spiderElement).height);

spiderElement.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
spiderElement.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
