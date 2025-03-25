'use strict';

// write code here
const spider = document.querySelector('.spider');
const field = document.querySelector('.wall');

spider.style.left =
  Math.round(field.clientWidth / 2 - spider.offsetWidth / 2) + 'px';

spider.style.top =
  Math.round(field.clientHeight / 2 - spider.offsetHeight / 2) + 'px';
