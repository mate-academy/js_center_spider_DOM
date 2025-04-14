'use strict';

const spider = document.querySelector('.spider');

spider.style.width = '30px';
spider.style.position = 'relative';
spider.style.top = `${spider.offsetParent.clientHeight * 0.5 - spider.clientHeight * 0.5}px`;
spider.style.left = `${spider.offsetParent.offsetWidth * 0.5 - spider.offsetWidth * 0.5}px`;
