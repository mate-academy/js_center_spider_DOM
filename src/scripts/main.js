'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const rect = wall.getBoundingClientRect();
  const spiderLeft = rect.left + (rect.width - spiderWidth) / 2;
  const spiderTop = rect.top + (rect.height - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
});
