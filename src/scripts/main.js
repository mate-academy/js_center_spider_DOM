'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.left = '50%';
spider.style.top = '50%';
spider.style.transform = 'translate(-50%, -50%)';
