'use strict';

// write code here
const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpiderInWall() {

  if (!field || !spider) {
    return;
  }

  const wallWidth = field.clientWidth;
  const wallHeight = field.clientHeight;

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const leftPx = (wallWidth - spiderWidth) / 2;
  const topPx = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${leftPx}px`;
  spider.style.top = `${topPx}px`;
}

centerSpiderInWall();
