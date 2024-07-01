'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = convertToNumber(getComputedStyle(wall).width);
const wallHeight = convertToNumber(getComputedStyle(wall).height);

const spiderWidth = convertToNumber(getComputedStyle(spider).width);
const spiderHeight = convertToNumber(getComputedStyle(spider).height);

const newSpiderLeft = wallWidth / 2 - spiderWidth / 2;
const newSpiderTop = wallHeight / 2 - spiderHeight / 2;

spider.style.left = newSpiderLeft + 'px';

spider.style.top = newSpiderTop + 'px';

function convertToNumber(value) {
  return parseFloat(value);
}
