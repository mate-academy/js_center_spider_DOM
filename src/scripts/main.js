'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const horizontalPosition = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.left = horizontalPosition + 'px';

const verticallyPosition = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.top = verticallyPosition + 'px';
