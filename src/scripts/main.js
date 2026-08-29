'use strict';

const parentElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

const parentWidth = parentElement.clientWidth;
const spiderWidth = spiderElement.offsetWidth;
const parentHeight = parentElement.clientHeight;
const spiderHeight = spiderElement.offsetHeight;
const leftPos = (parentWidth - spiderWidth) / 2;
const topPos = (parentHeight - spiderHeight) / 2;

spiderElement.style.top = topPos + 'px';
spiderElement.style.left = leftPos + 'px';
