'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const field = document.querySelector('.wall');

  if (!field || !spider) {
    return;
  }

  if (getComputedStyle(field).position === 'static') {
    field.style.position = 'relative';
  }

  const topPosition = (field.clientHeight - spider.clientHeight) / 2;
  const leftPosition = (field.clientWidth - spider.clientWidth) / 2;

  spider.style.position = 'absolute';
  spider.style.top = topPosition + 'px';
  spider.style.left = leftPosition + 'px';
});
