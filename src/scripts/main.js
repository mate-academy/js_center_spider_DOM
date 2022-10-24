'use strict';

const spider = document.querySelector('.spider');
const field = document.querySelector('.wall');

spider.style.top = (field.clientHeight - spider.clientHeight) / 2 + 'px';
spider.style.left = (field.clientWidth - spider.clientWidth) / 2 + 'px';
