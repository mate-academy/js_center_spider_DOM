'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const up = parseFloat(wall.clientWidth) / 2
- parseFloat(spider.clientWidth) / 2;
const left = parseFloat(wall.clientHeight) / 2
- parseFloat(spider.clientHeight) / 2;

spider.style.top = `${up}px`;
spider.style.left = `${left}px`;
