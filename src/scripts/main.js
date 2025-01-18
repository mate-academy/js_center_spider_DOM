'use strict';

// write code here
const centerSpider = () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderTop = (wall.clientHeight - spider.clientHeight) / 2;
  const spiderLeft = (wall.clientWidth - spider.clientWidth) / 2;

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
};

centerSpider();
