'use strict';

// write code here
const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

const currentSpiderWidth = spiderElement.clientWidth / 2;
const currentSpiderHeight = spiderElement.clientHeight / 2;
const spiderPositionVertical = wallElement.clientWidth / 2 - currentSpiderWidth;
const spiderPositionHorizontal =
  wallElement.clientHeight / 2 - currentSpiderHeight;

spiderElement.style.left = `${spiderPositionVertical}px`;
spiderElement.style.top = `${spiderPositionHorizontal}px`;
