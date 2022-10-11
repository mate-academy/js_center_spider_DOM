'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const x = `${(wall.clientWidth - spider.offsetWidth) / 2}px`;

spider.style.top = x;
spider.style.left = x;
