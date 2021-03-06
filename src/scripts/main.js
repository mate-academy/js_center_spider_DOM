'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderWidth = parseInt(getComputedStyle(spider).width);
const spiderHeight = parseInt(getComputedStyle(spider).height);

const wallWidth = parseInt(getComputedStyle(wall).width);
const wallHeight = parseInt(getComputedStyle(wall).height);

document.querySelector('.spider').style.top = wallHeight / 2
  - spiderHeight / 2 + 'px';

document.querySelector('.spider').style.left = wallWidth / 2
  - spiderWidth / 2 + 'px';
