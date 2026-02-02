'use strict';

const spider = document.querySelector('.spider');

const spiderTop =
  spider.offsetParent.clientHeight / 2 - parseFloat(spider.offsetHeight) / 2;

const spiderLeft =
  spider.offsetParent.clientWidth / 2 - parseFloat(spider.offsetWidth) / 2;

spider.style.top = spiderTop + 'px';
spider.style.left = spiderLeft + 'px';
