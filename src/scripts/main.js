'use strict';

const centerSpider = () => {
  const spiderElement = document.querySelector('img');

  spiderElement.style.position = 'absolute';
  spiderElement.style.top = '50%';
  spiderElement.style.left = '50%';
  spiderElement.style.transform = 'translate(-50%, -50%)';
};

centerSpider();
