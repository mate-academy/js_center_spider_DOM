'use strict';

window.onload = function () {
  const spiderObj = document.querySelector('.spider');
  const wallObj = document.querySelector('.wall');

  if (!spiderObj || !wallObj) {
    throw new Error('Objects are not found');
  }

  wallObj.style.position = 'relative';
  spiderObj.style.position = 'absolute';

  // Get computed styles to retrieve padding
  const wallStyles = window.getComputedStyle(wallObj);
  const paddingLeft = parseFloat(wallStyles.paddingLeft);
  const paddingTop = parseFloat(wallStyles.paddingTop);

  // Calculate center position relative to content box (excluding padding)
  const leftPos =
    (wallObj.clientWidth - spiderObj.offsetWidth) / 2 + paddingLeft;
  const topPos =
    (wallObj.clientHeight - spiderObj.offsetHeight) / 2 + paddingTop;

  // Set pixel-based positioning
  spiderObj.style.left = `${leftPos}px`;
  spiderObj.style.top = `${topPos}px`;
};
