'use strict';

const spiderElement = document.querySelector('.spider');
const spiderHeight = spiderElement.offsetHeight;
const spiderWidth = spiderElement.offsetWidth;

spiderElement.style.top = `calc(50% - ${spiderHeight / 2}px)`;
spiderElement.style.left = `calc(50% - ${spiderWidth / 2}px)`;
