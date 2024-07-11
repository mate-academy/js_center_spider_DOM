'use strict';

function convertPxToNumber(pxString) {
  const numberString = pxString.replace('px', '');

  const number = parseInt(numberString, 10);

  return number;
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = convertPxToNumber(getComputedStyle(wall).width);
const spiderWith = convertPxToNumber(getComputedStyle(spider).width);
const wallHeight = convertPxToNumber(getComputedStyle(wall).height);
const spiderHeight = convertPxToNumber(getComputedStyle(spider).height);

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${wallWidth / 2 - spiderWith / 2}px`;
