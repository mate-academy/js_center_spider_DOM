'use strict';

const side = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = side.clientWidth / 2 - spider.offsetWidth / 2 + 'px';
spider.style.left = side.clientHeight / 2 - spider.offsetHeight / 2 + 'px';
