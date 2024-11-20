'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (wall && spider) {
  const centerTop = wall.clientHeight / 2 - spider.clientHeight / 2;
  const centerLeft = wall.clientWidth / 2 - spider.clientWidth / 2;

  spider.style.top = `${centerTop}px`;
  spider.style.left = `${centerLeft}px`;
}
