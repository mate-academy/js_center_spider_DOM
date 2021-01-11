'use strict';

const box = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${(box.clientHeight - spider.clientHeight) / 2}px`;
spider.style.left = `${(box.clientWidth - spider.clientWidth) / 2}px`;
