/* eslint-disable no-unused-vars */
'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const padding = 10;

const positionX =
  wallRect.left +
  window.pageXOffset +
  10 +
  wall.clientWidth / 2 -
  spiderRect.width / 2;

const positionY =
  wallRect.top +
  window.pageYOffset +
  10 +
  wall.clientHeight / 2 -
  spiderRect.height / 2;

spider.style.position = 'fixed';
spider.style.left = `${positionX}px`;
spider.style.top = `${positionY}px`;
