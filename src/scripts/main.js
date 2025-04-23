'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallHight = wall.clientHeight;
const wallWidth = wall.clientWidth;
const coords = spider.getBoundingClientRect();

spider.style.top = wallHight / 2 - coords.height / 2 + 'px';
spider.style.left = wallWidth / 2 - coords.width / 2 + 'px';
