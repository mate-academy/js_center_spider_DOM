'use strict';

const spider = document.getElementsByClassName('spider')[0];
const field = document.getElementsByClassName('wall')[0];

field.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.top = '50%';
spider.style.left = '50%';
spider.style.transform = 'translate(-50%, -50%)';
