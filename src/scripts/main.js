'use strict';

function centerObject(object, relative) {
  const y = (relative.clientHeight - object.offsetHeight) / 2;
  const x = (relative.clientWidth - object.offsetWidth) / 2;

  object.style.top = `${y}px`;
  object.style.left = `${x}px`;
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

centerObject(spider, wall);
