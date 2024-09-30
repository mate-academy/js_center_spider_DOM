'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallStyles = getComputedStyle(wall);
const spiderStyles = getComputedStyle(spider);

const leftStep =
  Number(wallStyles.width.replace('px', '')) * 0.5 -
  Number(spiderStyles.width.replace('px', '')) * 0.5;
const topStep =
  Number(wallStyles.height.replace('px', '')) * 0.5 -
  Number(spiderStyles.height.replace('px', '')) * 0.5;

spider.style.left = `${leftStep}px`;
spider.style.top = `${topStep}px`;
