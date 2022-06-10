'use strict';

// search elements
const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${field.clientHeight / 2 - spider.clientHeight / 2}px`;
spider.style.left = `${field.clientWidth / 2 - spider.clientWidth / 2}px`;
