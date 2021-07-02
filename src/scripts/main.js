'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${
  calculateCenteringOffset(
    getComputedStyle(wall).height,
    getComputedStyle(spider).height
  )
}px`;

spider.style.left = `${
  calculateCenteringOffset(
    getComputedStyle(wall).width,
    getComputedStyle(spider).width
  )
}px`;

function calculateCenteringOffset(containerSize, childSize) {
  const containerSizeNum = parseFloat(containerSize);
  const childSizeNum = parseFloat(childSize);

  return (containerSizeNum / 2) - (childSizeNum / 2);
}
