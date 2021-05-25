'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = wall.clientWidth / 2 + 'px';
spider.style.left = wall.clientHeight / 2 + 'px';
spider.style.marginLeft = -(spider.offsetWidth / 2) + 'px';
spider.style.marginTop = -(spider.offsetHeight / 2) + 'px';
