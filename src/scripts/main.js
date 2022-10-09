'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const center = `${(wall.clientWidth - spider.offsetWidth) / 2}px`;

spider.style.top = center;
spider.style.left = center;
