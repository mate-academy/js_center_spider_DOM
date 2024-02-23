'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = `${(field.clientWidth - spider.clientWidth) / 2}px`;
spider.style.top = `${(field.clientHeight - spider.clientHeight) / 2}px`;
