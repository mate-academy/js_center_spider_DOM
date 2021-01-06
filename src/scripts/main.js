'use strict';

const spider = document.querySelector('.spider');

spider.style.top = `calc(50% - (${spider.clientHeight}px / 2))`;
spider.style.left = `calc(50% - (${spider.clientWidth}px / 2))`;
