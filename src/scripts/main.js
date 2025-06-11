'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wallElement = document.querySelector('.wall');
  const spiderElement = document.querySelector('.spider');

  if (!wallElement || !spiderElement) {
    return;
  }

  const wallWidth = wallElement.offsetWidth;
  const wallHeight = wallElement.offsetHeight;

  const spiderWidth = spiderElement.offsetWidth;
  const spiderHeight = spiderElement.offsetHeight;

  const centerLeft = (wallWidth - spiderWidth) / 2;
  const centerTop = (wallHeight - spiderHeight) / 2;

  spiderElement.style.left = `${centerLeft}px`;
  spiderElement.style.top = `${centerTop}px`;
});
