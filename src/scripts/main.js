'use strict';

const findParamValue = (element, param) => {
  return parseFloat(getComputedStyle(element)[param]);
};
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallWidth = findParamValue(wall, 'width');
const wallHeight = findParamValue(wall, 'height');
const spiderWidth = findParamValue(spider, 'width');
const spiderHeight = findParamValue(spider, 'height');

spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
