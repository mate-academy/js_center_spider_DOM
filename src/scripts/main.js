'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (wall && spider) {
    const wallPosition = window.getComputedStyle(wall).position;

    if (wallPosition === 'static') {
      wall.style.position = 'relative';
    }

    const wallWidth = wall.clientWidth;
    const wallHeight = wall.clientHeight;

    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    const posLeft = (wallWidth - spiderWidth) / 2;
    const posTop = (wallHeight - spiderHeight) / 2;

    spider.style.position = 'absolute';
    spider.style.left = posLeft + 'px';
    spider.style.top = posTop + 'px';
  }
});
