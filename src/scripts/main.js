'use strict';

// write code here
const spider = document.body.querySelector('.spider');
const wall = document.body.querySelector('.wall');
const spiderComputedStyle = window.getComputedStyle(spider);
const spiderWidth = spiderComputedStyle.width;

spider.style.top = (
  parseInt(wall.clientHeight) / 2 - parseInt(spiderWidth) / 2 + 'px'
);
spider.style.left = spider.style.top;
