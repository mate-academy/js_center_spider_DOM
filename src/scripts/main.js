'use strict';

const spider = document.querySelector('.spider');

const width = spider.offsetParent.offsetWidth;
const height = spider.offsetParent.offsetHeight;

spider.style.top = `${height / 2 - (spider.offsetHeight / 2)}px`;
spider.style.left = `${width / 2 - (spider.offsetWidth / 2)}px`;
