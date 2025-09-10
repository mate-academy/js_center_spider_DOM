'use strict';

function centerSpider() {
  const spiderObj = document.querySelector('.spider');
  const wallObj = document.querySelector('.wall');

  if (!spiderObj || !wallObj) {
    throw new Error('Objects are not found');
  }

  wallObj.style.position = 'relative';
  spiderObj.style.position = 'absolute';

  // Calculate center position relative to content box (excluding padding)
  const leftPos = (wallObj.clientWidth - spiderObj.offsetWidth) / 2;
  const topPos = (wallObj.clientHeight - spiderObj.offsetHeight) / 2;

  // Set pixel-based positioning
  spiderObj.style.left = `${leftPos}px`;
  spiderObj.style.top = `${topPos}px`;
}

window.onload = function () {
  centerSpider();
};

window.addEventListener('resize', centerSpider);
