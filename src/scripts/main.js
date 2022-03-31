'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderTop = field.clientHeight / 2 - spider.clientHeight / 2;
const spiderLeft = field.clientHeight / 2 - spider.clientHeight / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
