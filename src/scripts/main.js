'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (wall && spider) {
    spider.style.top = '50%';
    spider.style.left = '50%';
    spider.style.transform = 'translate(-50%, -50%)';
  }
});
