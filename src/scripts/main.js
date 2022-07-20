'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.transform = `translate(
  ${(wall.clientWidth - spider.clientWidth) / 2}px,
  ${(wall.clientHeight - spider.clientHeight) / 2}px
)`;
