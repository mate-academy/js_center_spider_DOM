'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

const centerSpider = () => {
  const wallRect = wallElement.getBoundingClientRect();
  const spiderRect = spiderElement.getBoundingClientRect();

  const wallStyles = window.getComputedStyle(wallElement);

  const wallBorderWidth =
    parseFloat(wallStyles.borderLeftWidth) +
    parseFloat(wallStyles.borderRightWidth);
  const wallBorderHeight =
    parseFloat(wallStyles.borderTopWidth) +
    parseFloat(wallStyles.borderBottomWidth);

  const wallHeight = wallRect.height;
  const wallWidth = wallRect.width;

  const spiderHeight = spiderRect.height;
  const spiderWidth = spiderRect.width;

  const spiderTop = (wallHeight - wallBorderHeight) / 2 - spiderHeight / 2;
  const spiderLeft = (wallWidth - wallBorderWidth) / 2 - spiderWidth / 2;

  spiderElement.style.top = `${spiderTop}px`;
  spiderElement.style.left = `${spiderLeft}px`;
};

centerSpider();
