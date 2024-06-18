'use strict';

const spider = document.querySelector('.spider');

const { width, height } = spider.getBoundingClientRect();

spider.style.cssText = `
  left: 50%;
  top: 50%;
  margin-left: -${width / 2}px;
  margin-top: -${height / 2}px;
`;
