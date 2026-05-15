'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerSpider = () => {
  const spiderX = (wall.clientWidth - spider.offsetWidth) / 2;
  const spiderY = (wall.clientHeight - spider.offsetHeight) / 2;

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
};

centerSpider();
