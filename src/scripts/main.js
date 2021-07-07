'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${field.clientWidth / 2 - spider.width / 2}px`;
spider.style.left = `${field.clientHeight / 2 - spider.height / 2}px`;
