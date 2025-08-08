'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const topPos = field.clientHeight / 2 - spider.clientHeight / 2;
const leftPos = field.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = `${topPos}px`;
spider.style.left = `${leftPos}px`;
