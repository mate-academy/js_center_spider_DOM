'use strict';

const spiderElement = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

const offsetX = (wallElement.clientWidth - spiderElement.clientWidth) / 2;
const offsetY = (wallElement.clientHeight - spiderElement.clientHeight) / 2;

spiderElement.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
