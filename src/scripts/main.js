'use strict';

window.addEventListener('load', () => {
  const spider = document.querySelector('.spider');
  const field = document.querySelector('.wall');

  const spiderWidth = spider.offsetWidth;
  const fieldInnerWidth = field.clientWidth;
  const spiderHeight = spider.offsetHeight;
  const fieldInnerHeight = field.clientHeight;

  const spiderTop = (fieldInnerHeight - spiderHeight) / 2;
  const spiderLeft = (fieldInnerWidth - spiderWidth) / 2;

  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
});
