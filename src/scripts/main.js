'use strict';

const box = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = box.clientHeight / 2 + 'px';
spider.style.left = box.clientHeight / 2 + 'px';
spider.style.transform = 'translate(-50%, -50%)';
