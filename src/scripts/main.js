'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const y = (wall.clientHeight / 2) - (spider.offsetHeight / 2);
const x = (wall.clientWidth / 2) - (spider.offsetWidth / 2);

spider.style.top = `${y}px`;
spider.style.left = `${x}px`;
