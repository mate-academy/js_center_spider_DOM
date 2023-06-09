'use strict';

const wallElem = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${(wallElem.offsetWidth - spider.offsetHeight) / 2}px`;
spider.style.left = `${(wallElem.offsetWidth - spider.offsetHeight) / 2}px`;
