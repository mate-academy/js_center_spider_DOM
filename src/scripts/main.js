'use strict';

const spider = document.body.querySelector('.spider');
const wall = document.body.querySelector('.wall');

spider.style.top = `${(wall.clientHeight / 2) - (spider.clientHeight / 2)}px`;
spider.style.left = `${(wall.clientWidth / 2) - (spider.clientWidth / 2)}px`;
