'use strict';

const spider = document.querySelector('.spider');

spider.style.top = `calc(50% - ${spider.offsetHeight}px / 2)`;
spider.style.left = `calc(50% - ${spider.offsetWidth}px / 2)`;
