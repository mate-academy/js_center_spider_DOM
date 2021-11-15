'use strict';

// write code here
const block = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const styleBlock = getComputedStyle(block);
const styleSpider = getComputedStyle(spider);

spider.style.top = `${(parseFloat(styleBlock.width)
  - parseFloat(styleSpider.width)) / 2}px`;

spider.style.left = `${(parseFloat(styleBlock.height)
  - parseFloat(styleSpider.height)) / 2}px`;
