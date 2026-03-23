'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const horizontalPosition = (wall.clientWidth - spiderWidth) / 2;
const verticalPosition = (wall.clientHeight - spiderHeight) / 2;

spider.style.left = horizontalPosition + 'px';
spider.style.top = verticalPosition + 'px';
