'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');

  const spider = document.querySelector('.spider');

  wall.style.position = 'relative';

  const wallDef = wall.getBoundingClientRect();
  const spiderDef = spider.getBoundingClientRect();

  const spiderTop = (wallDef.height - spiderDef.height) / 2;

  const spiderLeft = (wallDef.width - spiderDef.width) / 2;

  spider.style.position = 'absolute';
  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
