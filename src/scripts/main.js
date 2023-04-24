'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${(wall.clientWidth / 2) - (spider.offsetWidth / 2)}px`;
spider.style.left = `${(wall.clientWidth / 2) - (spider.offsetHeight / 2)}px`;
