'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function positionSpider() {
  if (!wall || !spider) {
    return;
  }

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeigh = spider.clientHeight;

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  const requiredLeft = (wallWidth - spiderWidth) / 2;
  const requiredTop = (wallHeight - spiderHeigh) / 2;

  spider.style.top = `${requiredTop}px`;
  spider.style.left = `${requiredLeft}px`;
}

positionSpider();
