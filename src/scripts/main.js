'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

window.console.log(spider.offsetHeight);

spider.style.top = (wall.clientHeight - spider.offsetHeight) / 2 + 'px';
spider.style.left = (wall.clientWidth - spider.offsetWidth) / 2 + 'px';
