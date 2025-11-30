'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const computedLeft = Math.round(wall.clientWidth / 2 - spider.offsetWidth / 2);
const computedTop = Math.round(wall.clientHeight / 2 - spider.offsetHeight / 2);

spider.style.top = `${computedTop}px`;
spider.style.left = `${computedLeft}px`;
