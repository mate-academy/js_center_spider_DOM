'use strict';

function centerSpider() {
  const spider = document.querySelector('.spider');

  spider.style.left = '50%';
  spider.style.top = '50%';
  spider.style.transform = 'translate(-50%, -50%)';
}
centerSpider();
