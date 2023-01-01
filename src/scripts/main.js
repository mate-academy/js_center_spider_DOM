'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const yPosition = wallHeight / 2 - spiderHeight / 2;
const xPosition = wallWidth / 2 - spiderWidth / 2;

spider.style.cssText = `top: ${yPosition}px;
  left: ${xPosition}px`;
