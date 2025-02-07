'use strict';

const spider = document.querySelector('.spider');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.top = `calc(50% - ${spiderHeight / 2}px)`;
spider.style.left = `calc(50% - ${spiderWidth / 2}px)`;
