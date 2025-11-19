'use strict';

// write code here
const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

spiderElement.style.top = `${wallElement.clientHeight / 2 - spiderElement.offsetHeight / 2}px`;
spiderElement.style.left = `${wallElement.clientWidth / 2 - spiderElement.offsetWidth / 2}px`;
