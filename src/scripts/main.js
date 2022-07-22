'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.querySelector('.spider').style.cssText = `
  transform: translate(
  ${(wall.clientWidth - spider.clientWidth) / 2}px,
  ${(wall.clientHeight - spider.clientHeight) / 2}px);
`;
