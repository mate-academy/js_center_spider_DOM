'use strict';

window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const left = (wallWidth - spiderWidth) / 2;
  const top = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
