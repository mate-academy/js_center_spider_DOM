'use strict';

const wall = document.querySelector('.spider');
const spider = document.querySelector('.spider');

const calcElementSize = (element) => {
  return element / 2;
};

const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const centerWidth = calcElementSize(widthWall) - calcElementSize(spiderWidth);
const centerHight = calcElementSize(heightWall) - calcElementSize(spiderHeight);

spider.style.top = centerWidth + 'px';
spider.style.left = centerHight + 'px';
