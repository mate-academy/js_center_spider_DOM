'use strict';

// write code here
function centetTheSpider() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  const spiderHeight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;

  spider.style.top = wallHeight / 2 - spiderHeight / 2 + 'px';
  spider.style.left = wallWidth / 2 - spiderWidth / 2 + 'px';
}

centetTheSpider();
