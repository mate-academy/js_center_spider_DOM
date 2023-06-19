'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

const wallWidth = wallElement.offsetWidth;
const wallHeight = wallElement.offsetHeight;

const spiderWidth = spiderElement.offsetWidth;
const spiderHeight = spiderElement.offsetHeight;

const spiderLeft = (wallWidth - spiderWidth) / 2;
const spiderTop = (wallHeight - spiderHeight) / 2;

spiderElement.style.left = `${spiderLeft}px`;
spiderElement.style.top = `${spiderTop}px`;
