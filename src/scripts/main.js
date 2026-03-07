'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

/** розміри стіни */
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

/** розміри павука */
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

/** центр по горизонталі та вертикалі */
const leftPosition = (wallWidth - spiderWidth) / 2;
const topPosition = (wallHeight - spiderHeight) / 2;

wall.style.position = 'relative';
spider.style.position = 'absolute';

spider.style.left = leftPosition + 'px';
spider.style.top = topPosition + 'px';
