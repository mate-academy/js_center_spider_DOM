'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const { clientWidth, clientHeight } = wall;
const { offsetWidth, offsetHeight } = spider;

spider.style.left = (clientWidth - offsetWidth) / 2 + 'px';
spider.style.top = (clientHeight - offsetHeight) / 2 + 'px';
