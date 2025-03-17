'use strict';

const spider = document.querySelector('.spider');
const parentEl = document.querySelector('.wall');

spider.style.left = parentEl.scrollWidth / 2 - spider.offsetWidth / 2 + 'px';
spider.style.top = parentEl.scrollHeight / 2 - spider.offsetHeight / 2 + 'px';
