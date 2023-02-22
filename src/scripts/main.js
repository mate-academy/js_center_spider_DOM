'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = (field.clientWidth - spider.offsetWidth) / 2 + 'px';
spider.style.top = (field.clientHeight - spider.offsetHeight) / 2 + 'px';
