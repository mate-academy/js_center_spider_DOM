'use strict';

// write code here
const spider = document.querySelector('.spider');

setTimeout(() => {
  spider.style.left = '50%';
  spider.style.top = '50%';
  spider.style.transform = 'translate(-50%, -50%)';
}, 600);
