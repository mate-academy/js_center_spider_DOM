'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const y = (spider.clientHeight - wall.clientHeight) / 2;
const x = (spider.clientWidth - wall.clientWidth) / 2;

spider.style.top = `${y}px`;
spider.style.left = `${x}px`;
