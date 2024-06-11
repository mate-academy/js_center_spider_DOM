'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const x = (field.clientWidth - spider.clientWidth) / 2;
const y = (field.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${x}px`;
spider.style.top = `${y}px`;
