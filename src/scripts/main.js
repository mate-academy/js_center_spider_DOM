'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

field.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.top = '50%';
spider.style.left = '50%';
spider.style.transform = 'translate(-50%, -50%)';
