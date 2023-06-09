'use strict';

const wall = document.body.querySelector('.wall');
const spider = document.body.querySelector('.spider');

spider.style.left
  = Math.round(wall.clientWidth / 2 - spider.offsetWidth / 2) + 'px';

spider.style.top
  = Math.round(wall.clientHeight / 2 - spider.offsetHeight / 2) + 'px';
