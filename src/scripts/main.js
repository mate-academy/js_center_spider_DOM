'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${parseFloat(
  wall.clientHeight - spider.clientHeight
) / 2}px`;

spider.style.left = `${parseFloat(
  wall.clientWidth - spider.clientWidth
) / 2}px`;
