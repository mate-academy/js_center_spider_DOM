'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const { width: wallWidth, height: wallHeight } = getComputedStyle(wall);
const { width: spiderWidth, height: spiderHeight } = getComputedStyle(spider);

spider.style.left = parseInt(wallWidth) / 2 - parseInt(spiderWidth) / 2 + 'px';
spider.style.top = parseInt(wallHeight) / 2 - parseInt(spiderHeight) / 2 + 'px';
