'use strict';

// write code here
const spider = document.querySelector('.spider');
const container = document.querySelector('.wall');

spider.style.left = container.clientWidth / 2 - spider.offsetWidth / 2 + 'px';
spider.style.top = container.clientHeight / 2 - spider.offsetHeight / 2 + 'px';
