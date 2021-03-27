'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function coordinatesCenter(obj, element) {
  const leftX = Math.round(obj.clientWidth / 2 - element
    .offsetWidth / 2) + 'px';
  const topY = Math.round(obj.clientHeight / 2 - element
    .offsetHeight / 2) + 'px';

  element.style.top = topY;
  element.style.left = leftX;

  return element;
}

coordinatesCenter(wall, spider);
