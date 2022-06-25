'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const centerWidth = Math.round(wall.clientWidth / 2 - spider.offsetWidth / 2);
const centerHeight = Math.round(
  wall.clientHeight / 2 - spider.offsetHeight / 2);

spider.style.left = `${centerWidth}px`;
spider.style.top = `${centerHeight}px`;
