'use strict';

const wall = document.querySelector('.wall').getBoundingClientRect();
const spider = document.querySelector('.spider');
const qtySpiderOnTheWall = Math.floor(wall.width / spider.width);
const positionSpider =
  (wall.width - (wall.width - qtySpiderOnTheWall * spider.width)) / 2 -
  spider.width / 2;

spider.style.top = `${positionSpider}px`;
spider.style.left = `${positionSpider}px`;
