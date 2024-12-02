'use strict';

// write code here
const spider = document.body.querySelector('.spider');
const wall = document.body.querySelector('.wall');
const spiderComputedStyle = window.getComputedStyle(spider);
const spiderWidth = spiderComputedStyle.width;
const spiderHeight = spiderComputedStyle.height;

spider.style.top = (
  (parseInt(wall.clientHeight) - parseInt(spiderHeight)) / 2 + 'px'
);

spider.style.left = (
  (parseInt(wall.clientWidth) - parseInt(spiderWidth)) / 2 + 'px'
);
