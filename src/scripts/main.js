'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centering() {
  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  const lefting = (wall.clientWidth - spider.clientWidth) / 2;
  const toping = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.left = lefting + 'px';
  spider.style.top = toping + 'px';
}

if (spider.complete) {
  centering();
  window.addEventListener('resize', centering);
} else {
  spider.addEventListener('load', centering);
  window.addEventListener('resize', centering);
}
