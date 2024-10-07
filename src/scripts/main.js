'use strict';

// write code here
const spider = document.querySelector('.spider');

function centerSpider() {
  spider.style.left = '50%';
  spider.style.top = '50%';
  spider.style.position = 'absolute';
  spider.style.transform = 'translate(-50%, -50%)';
}

window.onload = centerSpider;
