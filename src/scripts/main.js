'use strict';

const spider = document.querySelector('.spider');
const parentElement = spider.offsetParent;
const width = (parentElement.clientWidth / 2)
  - (spider.getBoundingClientRect().width / 2);
const height = (parentElement.clientHeight / 2)
  - (spider.getBoundingClientRect().height / 2);

spider.style.cssText = `position: absolute; top: ${width}px; left: ${height}px`;
