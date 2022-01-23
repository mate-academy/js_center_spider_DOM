'use strict';

const spider = document.querySelector('.spider');
const wall = spider.parentElement;

spider.style.left = `${(wall.clientWidth - spider.offsetWidth) / 2}px`;
spider.style.top = `${(wall.clientHeight - spider.offsetHeight) / 2}px`;
