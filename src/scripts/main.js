'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const difference
= (wall.clientHeight - spider.clientHeight) / spider.clientHeight;

spider.style.top = `${50 - difference}%`;
spider.style.left = `${50 - difference}%`;
