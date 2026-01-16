/* eslint-disable no-unused-vars */
'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const positionX =
  wallRect.left +
  window.pageXOffset +
  wall.clientWidth / 2 -
  spiderRect.width / 2;

const positionY =
  wallRect.top +
  window.pageYOffset +
  wall.clientHeight / 2 -
  spiderRect.height / 2;

spider.style.position = 'absolute';
spider.style.left = `${positionX}px`;
spider.style.top = `${positionY}px`;
