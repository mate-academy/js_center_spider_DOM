'use strict';

const wall = document.querySelector('div.wall');
const spider = wall.querySelector('img.spider');

spider.style.top = (wall.clientWidth - spider.offsetWidth) / 2 + 'px';
spider.style.left = (wall.clientHeight - spider.offsetHeight) / 2 + 'px';
