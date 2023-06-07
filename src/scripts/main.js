'use strict';

const wallElement = document.querySelector('.wall');
const wallStyle = getComputedStyle(wallElement);
const wallwidth = parseFloat(wallStyle.width) / 2;
const wallheight = parseFloat(wallStyle.height) / 2;

const spiderElement = document.querySelector('.spider');
const spiderStyle = getComputedStyle(spiderElement);
const spiderWidth = parseFloat(spiderStyle.width) / 2;
const spiderheight = parseFloat(spiderStyle.height) / 2;

wallElement.style.position = 'relative';
spiderElement.style.position = 'absolute';

spiderElement.style.top = `${wallheight - spiderheight}px`;
spiderElement.style.left = `${wallwidth - spiderWidth}px`;
