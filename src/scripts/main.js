'use strict';

function center() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const horizontalPosition = wall.clientWidth / 2 - spider.clientWidth / 2;
  const verticalPosition = wall.clientHeight / 2 - spider.clientHeight / 2;

  spider.style.left = `${horizontalPosition}px`;
  spider.style.top = `${verticalPosition}px`;
}

center();
