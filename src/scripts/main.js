'use strict';

const spiderElement = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

spiderElement.style.left = `${
  (wallElement.clientWidth - spiderElement.offsetWidth
  ) / 2}px`;

spiderElement.style.top = `${(
  wallElement.clientHeight - spiderElement.offsetHeight
) / 2}px`;
