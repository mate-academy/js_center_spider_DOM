'use strict';

// made it via event listener so spider moves swiftly after page is loaded
document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');

  spider.style.top = '40%';
  spider.style.left = '40%';
});
