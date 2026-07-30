'use strict';

function positionSpider(hero, container) {
  const spider = document.querySelector(hero);
  const wall = document.querySelector(container);

  spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
  spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
}

positionSpider('.spider', '.wall');
