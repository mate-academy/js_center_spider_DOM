'use strict';

const spider = document.querySelector('.spider');

const spiderStyles = window.getComputedStyle(spider);

const wall = document.querySelector('.wall');

const wallStyles = window.getComputedStyle(wall);

spider.style.left = `${parseFloat(wallStyles.width)
  / 2 - parseFloat(spiderStyles.width) / 2}px`;

spider.style.top = `${parseFloat(wallStyles.height)
  / 2 - parseFloat(spiderStyles.height) / 2}px`;
