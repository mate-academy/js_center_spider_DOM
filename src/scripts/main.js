'use strict';

centerTheElement();

function centerTheElement() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderSize = spider.clientWidth / 2;

  const createWidth = wall.clientWidth / 2;
  const createHeigth = wall.clientHeight / 2;

  spider.style.top = `${createWidth - spiderSize}px`;
  spider.style.left = `${createHeigth - spiderSize}px`;
};
