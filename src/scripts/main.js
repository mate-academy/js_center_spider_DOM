'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

spiderElement.style.top = `${wallElement.clientHeight / 2 - spiderElement.clientHeight / 2}px`;
spiderElement.style.left = `${wallElement.clientWidth / 2 - spiderElement.clientWidth / 2}px`;
