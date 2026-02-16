'use strict';

// write code here
const spider = document.getElementsByClassName('spider')[0];
const walls = document.getElementsByClassName('wall')[0];

spider.style.top = walls.clientHeight / 2 - spider.clientHeight / 2 + 'px';
spider.style.left = walls.clientWidth / 2 - spider.clientWidth / 2 + 'px';
