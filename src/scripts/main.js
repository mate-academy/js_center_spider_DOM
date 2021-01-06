'use strict';

const spider = document.querySelector('.spider');
const field = document.querySelector('.wall');

spider.style.top = `${(field.clientHeight - spider.offsetHeight) / 2}px`;
spider.style.left = `${(field.clientWidth - spider.offsetWidth) / 2}px`;
