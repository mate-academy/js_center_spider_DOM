'use strict';

const centerSpider = () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const spiderTop = (wallHeight - spiderHeight) / 2;
  const spiderLeft = (wallWidth - spiderWidth) / 2;

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
};

centerSpider();
