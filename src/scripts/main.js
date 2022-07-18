'use strict';

const elWall = document.querySelector('.wall');
const elSpider = document.querySelector('.spider');

elSpider.style.transform = `translate(
  ${(elWall.clientWidth - elSpider.clientWidth) / 2}px,
  ${(elWall.clientHeight - elSpider.clientHeight) / 2}px)`;
