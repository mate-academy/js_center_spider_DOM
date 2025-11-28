'use strict';

// write code here
window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallCords = wall.getBoundingClientRect();
  const spiderCords = spider.getBoundingClientRect();
  const newTop = (wallCords.height - spiderCords.height) / 2;

  spider.style.top = newTop + 'px';

  const left = (wallCords.width - spiderCords.width) / 2;

  spider.style.left = left + 'px';
});
