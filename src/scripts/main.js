'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

field.style.position = 'relative';
spider.style.position = 'absolute';

window.addEventListener('load', () => {
  const centerX = (field.clientWidth - spider.offsetWidth) / 2;
  const centerY = (field.clientHeight - spider.offsetHeight) / 2;

  spider.style.left = centerX + 'px';
  spider.style.top = centerY + 'px';
});
