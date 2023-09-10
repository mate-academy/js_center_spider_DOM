'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider(first, second) {
  const positionX
    = (parseFloat(getComputedStyle(first).width)
    - parseFloat(getComputedStyle(second).width)) / 2;
  const positionY
    = (parseFloat(getComputedStyle(first).height)
    - parseFloat(getComputedStyle(second).height)) / 2;

  second.style.left = `${positionX}px`;
  second.style.top = `${positionY}px`;
};
centerSpider(wall, spider);
