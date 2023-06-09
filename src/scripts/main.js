'use strict';

const wallElem = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${(wallElem.clientWidth - spider.clientHeight) / 2}px`;
spider.style.left = `${(wallElem.clientWidth - spider.clientHeight) / 2}px`;
