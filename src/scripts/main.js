'use strict';

const spidey = document.querySelector('.spider');
const walle = document.querySelector('.wall');

function centreASpider(spider, wall) {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const spiderCenterX = spiderRect.left + spiderRect.width / 2;
  const spiderCenterY = spiderRect.top + spiderRect.height / 2;
  const wallCenterX = wallRect.left + wallRect.width / 2;
  const wallCenterY = wallRect.top + wallRect.height / 2;

  const deltaX = wallCenterX - spiderCenterX;
  const deltaY = wallCenterY - spiderCenterY;

  spider.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
}

centreASpider(spidey, walle);
