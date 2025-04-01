'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const left =
  (parseFloat(getComputedStyle(wall).width) -
    parseFloat(getComputedStyle(spider).width)) /
  2;

const topp =
  (parseFloat(getComputedStyle(wall).height) -
    parseFloat(getComputedStyle(spider).height)) /
  2;

spider.style.top = topp + 'px';
spider.style.left = left + 'px';
