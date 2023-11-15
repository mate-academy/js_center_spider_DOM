'use strict';

const spider = document.querySelector('.spider');

const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;

spider.style.top = `calc(50% - ${spiderHeight / 2}px)`;
spider.style.left = `calc(50% - ${spiderWidth / 2}px)`;
