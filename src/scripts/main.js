'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function getStylesNumber(element) {
  return Number(getComputedStyle(element).width.replace('px', ''));
}

const positioning = (
  getStylesNumber(wall) / 2 - getStylesNumber(spider) / 2
) + 'px';

spider.style.top = positioning;
spider.style.left = positioning;
