'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.left = (wall.offsetWidth - spider.offsetWidth) / 2 + 'px';

spider.style.top = (wall.offsetHeight - spider.offsetHeight) / 2 + 'px';
