'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('DOMContentLoaded', () => {
  if (wall && spider) {
    if (getComputedStyle(wall).position === 'static') {
      wall.style.positiomn = 'relative';
    }

    spider.style.position = 'absolute';
    spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
    spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
  }
});
