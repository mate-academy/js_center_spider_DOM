'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallSize = wall.offsetWidth;
const spiderSize = spider.offsetWidth;
const center = `${((wallSize / 2) - (spiderSize / 2) - 10)}px`;

spider.style.left = center;
spider.style.top = center;

// spider.style.position = 'relative';
// wall.style.display = 'flex';
// wall.style.justifyContent = 'center';
// wall.style.alignItems = 'center';
