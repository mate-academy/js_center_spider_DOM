'use strict';

// write code here
const walls = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider(element, container) {
  const boxBounds = container.getBoundingClientRect();
  const elementBounds = element.getBoundingClientRect();

  const up = (boxBounds.height - elementBounds.height) / 2;
  const left = (boxBounds.width - elementBounds.width) / 2;

  element.style.top = `${up}px`;
  element.style.left = `${left}px`;
}

centerSpider(spider, walls);
