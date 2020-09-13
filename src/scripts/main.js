'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.left = Math.round(wall.clientWidth / 2 - spider.offsetWidth / 2)
 + 'px';

spider.style.top = Math.round(wall.clientHeight / 2 - spider.offsetHeight / 2)
  + 'px';
