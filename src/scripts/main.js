'use strict';

function centerElement(container, element) {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const elemWidth = element.offsetWidth;
  const elemHeight = element.offsetHeight;

  const elemOffsetLeft = (containerWidth / 2) - (elemWidth / 2);
  const elemOffsetTop = (containerHeight / 2) - (elemHeight / 2);

  element.style.left = `${elemOffsetLeft}px`;
  element.style.top = `${elemOffsetTop}px`;
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

centerElement(wall, spider);
