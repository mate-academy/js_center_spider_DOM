'use strict';

// write code here

function centerSpider() {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  spider.style.position = 'absolute';

  spider.style.top = (wallWidth - spiderWidth) / 2 + 'px';
  spider.style.left = (wallHeight - spiderHeight) / 2 + 'px';
}

centerSpider();
