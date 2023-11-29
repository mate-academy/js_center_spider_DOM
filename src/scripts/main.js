'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function center(edge, parentElement, childElement) {
  switch (edge) {
    case 'top':
      return `${(
        parentElement.clientHeight - childElement.clientHeight
      ) / 2}px`;

    case 'left':
      return `${(parentElement.clientWidth - childElement.clientWidth) / 2}px`;

    default:
      return '0px';
  }
}

spider.style.top = center('top', wall, spider);
spider.style.left = center('left', wall, spider);
