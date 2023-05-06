'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.cssText = `
  top: ${(parseFloat(field.clientHeight)
    - parseFloat(spider.clientHeight)) / 2}px;
  left: ${(parseFloat(field.clientWidth)
    - parseFloat(spider.clientWidth)) / 2}px;
`;
