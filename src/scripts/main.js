'use strict';

const spider = document.querySelector('.spider');
const box = document.querySelector('.wall');

spider.style.top = box.clientWidth / 2 - spider.offsetWidth / 2 + 'px';
spider.style.left = box.clientHeight / 2 - spider.offsetHeight / 2 + 'px';
