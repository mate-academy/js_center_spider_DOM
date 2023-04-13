'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.cssText = `
  left: ${wallWidth / 2 - spiderWidth / 2}px;
  top: ${wallHeight / 2 - spiderHeight / 2}px;
`;
