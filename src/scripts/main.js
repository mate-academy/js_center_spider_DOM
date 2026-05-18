'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

const centerH = wall.clientHeight / 2 - spider.clientHeight / 2;
const centerW = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = centerH + 'px';
spider.style.left = centerW + 'px';
