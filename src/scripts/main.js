'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function findPart(mainBlockParam, childParam) {
  return `${(mainBlockParam - childParam) / 2}px`;
}

spider.style.top = findPart(wall.clientHeight, spider.clientHeight);
spider.style.left = findPart(wall.clientWidth, spider.clientWidth);
