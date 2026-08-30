'use strict';

const spiderElement = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

spiderElement.style.top = `${(wallElement.clientHeight - spiderElement.clientHeight) / 2}px`;
spiderElement.style.left = `${(wallElement.clientWidth - spiderElement.clientWidth) / 2}px`;
