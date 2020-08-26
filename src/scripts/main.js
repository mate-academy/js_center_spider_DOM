'use strict';

// write code here
const spiderToCenter = function() {
  const spider = document.querySelector('.spider');

  spider.style.top = '0';
  spider.style.bottom = '0';
  spider.style.left = '0';
  spider.style.right = '0';
  spider.style.margin = 'auto';
};

spiderToCenter();
