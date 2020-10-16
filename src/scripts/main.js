'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.boxSizing = 'border-box';

spider.style.left = (wall.offsetWidth - spider.offsetWidth) / 2 + 'px';
spider.style.top = (wall.offsetHeight - spider.offsetHeight) / 2 + 'px';
