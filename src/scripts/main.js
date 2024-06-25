'use strict';

const moveTheSpider = (selector) => {
  const spider = document.querySelector(selector);

  spider.style.position = 'inherit';
  spider.parentElement.style.display = 'flex';
  spider.parentElement.style.justifyContent = 'center';
  spider.parentElement.style.alignItems = 'center';
};

moveTheSpider('.spider');
