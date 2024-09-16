'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderLeft =
  Math.round((wall.clientWidth - spider.offsetWidth) / 2) + 'px';

const spiderTop =
  Math.round((wall.clientHeight - spider.offsetHeight) / 2) + 'px';

spider.style.left = spiderLeft;
spider.style.top = spiderTop;
