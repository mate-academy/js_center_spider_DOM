'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const coordTop = wall.getBoundingClientRect().height / 2
  - spider.getBoundingClientRect().height / 2;
const coordLeft = wall.getBoundingClientRect().width / 2
  - spider.getBoundingClientRect().width / 2;

const style = getComputedStyle(wall);

spider.style.top = `${coordTop - parseFloat(style.border)}px`;
spider.style.left = `${coordLeft - parseFloat(style.border)}px`;
