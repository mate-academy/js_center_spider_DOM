'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  spider.style.left = `
    ${(wall.clientWidth / 2) - (spider.clientWidth / 2)}px
  `;

  spider.style.top = `
    ${(wall.clientHeight / 2) - (spider.clientHeight / 2)}px
  `;
});
