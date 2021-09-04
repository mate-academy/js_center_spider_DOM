'use strict';

const field = document.querySelector('.wall');

const spider = document.querySelector('.spider');

spider.style.top = `${(parseFloat(getComputedStyle(field).width)
  - parseFloat(getComputedStyle(spider).width)) / 2}px`;

spider.style.left = `${(parseFloat(getComputedStyle(field).height)
  - parseFloat(getComputedStyle(spider).height)) / 2}px`;
