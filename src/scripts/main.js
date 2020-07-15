'use strict';

const spider = document.querySelector('.spider');
const style = window.getComputedStyle(spider);

spider.style.left = '50%';
spider.style.marginLeft = `-${parseFloat(style.width) / 2}px`;
spider.style.top = '50%';
spider.style.marginTop = `-${parseFloat(style.height) / 2}px`;
