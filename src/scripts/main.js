'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const y = (field.clientHeight - spider.clientHeight) / 2;
const x = (field.clientWidth - spider.clientWidth) / 2;

spider.style.top = `${y}px`;
spider.style.left = `${x}px`;
