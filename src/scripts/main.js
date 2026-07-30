'use strict';

function positionSpider(selection) {
  const spider = document.querySelector(selection);
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wall = document.querySelector('.wall');
  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  spider.style.top = `${(wallHeight - spiderHeight) / 2}px`;
  spider.style.left = `${(wallWidth - spiderWidth) / 2}px`;
}

positionSpider('.spider');
