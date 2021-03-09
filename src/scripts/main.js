'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = parseFloat(wall.clientHeight - spider.clientHeight) / 2
  + 'px';

spider.style.left = parseFloat(wall.clientWidth - spider.clientWidth) / 2
  + 'px';
