'use strict';

const spider = document.querySelector('.spider');
const spiderStyles = getComputedStyle(spider);

const spiderTop =
  spider.offsetParent.clientHeight / 2 - parseFloat(spiderStyles.height) / 2;

const spiderLeft =
  spider.offsetParent.clientWidth / 2 - parseFloat(spiderStyles.width) / 2;

spider.style.top = spiderTop + 'px';
spider.style.left = spiderLeft + 'px';
