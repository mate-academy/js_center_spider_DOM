'use strict';

const getNewPositionSpider = (sizesSpider, sizesWall) => {
  const halfSizesWall = sizesWall / 2;
  const halfSizesSpider = sizesSpider / 2;
  const newPositionSpider = halfSizesWall - halfSizesSpider;

  return newPositionSpider;
};

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${getNewPositionSpider(spider.clientHeight, wall.clientHeight)}px`;
spider.style.left = `${getNewPositionSpider(spider.clientWidth, wall.clientWidth)}px`;
