'use strict';

const spider = document.querySelector('.spider');

spider.style.top = `${
  (spider.offsetParent.clientHeight - spider.clientHeight) / 2
}px`;

spider.style.left = `${
  (spider.offsetParent.clientWidth - spider.clientWidth) / 2
}px`;
