'use strict';

const wallEl = document.querySelector('.wall');
const spiderEl = document.querySelector('.spider');

window.addEventListener('load', () => {
  const widthWall = wallEl.clientWidth;
  const heightWall = wallEl.clientHeight;
  const widthSpider = spiderEl.offsetWidth;
  const heightSpider = spiderEl.offsetHeight;
  const left = widthWall / 2 - widthSpider / 2;
  const topEl = heightWall / 2 - heightSpider / 2;

  spiderEl.style.left = left + 'px';
  spiderEl.style.top = topEl + 'px';
});
