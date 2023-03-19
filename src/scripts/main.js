'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.left = `${(parseFloat(wall.clientWidth) / 2)
- (parseFloat(spider.clientWidth) / 2)}px`;

spider.style.top = `${(parseFloat(wall.clientHeight) / 2)
- (parseFloat(spider.clientHeight) / 2)}px`;
