'use strict';

(function() {
  const spider = document.querySelector('.spider');

  spider.style.cssText = `
  top: calc(50% - ${spider.offsetHeight / 2}px);
  left: calc(50% - ${spider.offsetWidth / 2}px)`;
}());
