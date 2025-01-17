'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const borderSize = 10;

const centerX = Math.floor(
  (wall.offsetWidth - 2 * borderSize - spider.offsetWidth) / 2,
);
const centerY = Math.floor(
  (wall.offsetHeight - 2 * borderSize - spider.offsetHeight) / 2,
);

spider.style.cssText = `position: absolute; left: ${centerX}px; top: ${centerY}px`;
