'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

spider.style.left = `${(wall.clientWidth - spider.offsetWidth) / 2}px`;
spider.style.top = `${(wall.clientHeight - spider.offsetHeight) / 2}px`;
