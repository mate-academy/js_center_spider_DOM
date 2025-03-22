'use strict';

const spider = document.querySelector('img.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

spider.style.top = `calc(50% - ${spiderWidth}px / 2)`;
spider.style.left = `calc(50% - ${spiderHeight}px / 2)`;
