'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const centerTop = (wall.clientHeight - spider.offsetHeight) / 2;
const centerLeft = (wall.clientWidth - spider.offsetWidth) / 2;

spider.style.position = 'absolute';
spider.style.top = `${centerTop}px`;
spider.style.left = `${centerLeft}px`;
