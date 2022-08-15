'use strict';

const spider = document.querySelector('img');
const field = document.querySelector('div');

spider.style.left = Math.round(field.clientWidth / 2
- spider.offsetWidth / 2) + 'px';

spider.style.top = Math.round(field.clientHeight / 2
- spider.offsetHeight / 2) + 'px';
