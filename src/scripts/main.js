'use strict';

function setChildrenOnCenter(fatherElement, children) {
  const width = (fatherElement.clientWidth / 2) - (children.clientWidth / 2);
  const height = (fatherElement.clientHeight / 2) - (children.clientHeight / 2);

  children.style.top = height + 'px';
  children.style.left = width + 'px';
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

setChildrenOnCenter(wall, spyder);
