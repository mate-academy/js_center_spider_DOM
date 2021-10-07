'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// 1st variant
// wall.style.display = 'inherit';
// wall.style.alignItems = 'inherit';
// wall.style.justifyContent = 'inherit';
// spider.style.position = 'static';

// 2nd variant
const verticalWall = wall.clientHeight / 2;
const horizontWall = wall.clientWidth / 2;
const versicalSpider = spider.clientHeight / 2;
const horizontSpider = spider.clientWidth / 2;

spider.style.top = verticalWall - versicalSpider + 'px';
spider.style.left = horizontWall - horizontSpider + 'px';
