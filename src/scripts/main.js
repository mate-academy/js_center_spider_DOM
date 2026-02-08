'use strict';

// write code here

function centerEl() {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!field || !spider) {
    return;
  }

  if (!spider.complete) {
    return centerEl();
  }

  field.style.position = 'relative';
  spider.style.position = 'absolute';

  const topCenter = field.clientHeight / 2 - spider.clientHeight / 2;
  const leftCenter = field.clientWidth / 2 - spider.clientWidth / 2;

  spider.style.top = `${topCenter}px`;
  spider.style.left = `${leftCenter}px`;
}

centerEl();
