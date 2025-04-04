'use strict';

const wall = document.getElementsByClassName('wall')[0];
const spider = document.getElementsByClassName('spider')[0];
const wallCenter = (function () {
  const widthWall = wall.clientWidth;
  const heightWall = wall.clientHeight;
  const centerW = [widthWall / 2, heightWall / 2];

  return centerW;
})();
const spiderCenter = (function () {
  const widthSpider = spider.clientWidth;
  const heightSpider = spider.clientHeight;
  const centerS = [widthSpider / 2, heightSpider / 2];

  return centerS;
})();

const whereToPutSpider = [
  wallCenter[0] - spiderCenter[0],
  wallCenter[1] - spiderCenter[1],
];

spider.style.left = whereToPutSpider[0] + 'px';
spider.style.top = whereToPutSpider[1] + 'px';
