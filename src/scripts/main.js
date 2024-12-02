'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const height = (field.clientHeight - spider.clientHeight) / 2;
const horizontal = (field.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${height}px`;
spider.style.left = `${horizontal}px`;
