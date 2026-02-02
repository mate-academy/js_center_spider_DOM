'use strict';

const spider = document.querySelector('.spider');

const spiderTop =
  spider.offsetParent.clientHeight / 2 - spider.offsetHeight / 2;

const spiderLeft =
  spider.offsetParent.clientWidth / 2 - spider.offsetWidth / 2;

spider.style.top = spiderTop + 'px';
spider.style.left = spiderLeft + 'px';
