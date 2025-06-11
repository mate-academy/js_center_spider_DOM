'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');
const sizeObject = wallElement.getBoundingClientRect();

spiderElement.style.top = `${sizeObject.height / 2 - 35}px`;
spiderElement.style.left = `${sizeObject.width / 2 - 35}px`;
