'use strict';

const centerSpider = () => {
  const wallElement = document.querySelector('.wall');
  const spiderElement = document.querySelector('.spider');

  wallElement.style.display = 'flex';
  wallElement.style.justifyContent = 'center';
  wallElement.style.alignItems = 'center';

  spiderElement.style.top = 'unset';
  spiderElement.style.left = 'unset';
};

centerSpider();
