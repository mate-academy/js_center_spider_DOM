'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const calculatedTop = (field.clientHeight - spider.clientHeight) / 2 + 'px';
  const calculatedLeft = (field.clientWidth - spider.clientWidth) / 2 + 'px';

  spider.style.position = 'absolute';
  spider.style.top = calculatedTop;
  spider.style.left = calculatedLeft;
});
