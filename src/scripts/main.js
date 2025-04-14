'use strict';

// write code here
function center() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const hPosition = wall.clientWidth / 2 - spider.clientWidth / 2;
  const vPosition = wall.clientHeight / 2 - spider.clientHeight / 2;

  spider.style.left = `${hPosition}px`;
  spider.style.top = `${vPosition}px`;
}

center();
