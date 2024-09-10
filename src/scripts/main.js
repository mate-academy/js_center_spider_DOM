'use strict';

const container = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = container.clientHeight / 2 + 'px';
spider.style.left = container.clientHeight / 2 + 'px';
spider.style.transform = 'translate(-50%, -50%)';
