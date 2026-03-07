'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

/** розміри стіни */
const wallWidth = spider.offsetParent.clientWidth;
const wallHeight = spider.offsetParent.clientHeight;

/** розміри павука */
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

/** центр по горизонталі та вертикалі */
const leftPosition = (wallWidth - spiderWidth) / 2;
const topPosition = (wallHeight - spiderHeight) / 2;

spider.style.left = leftPosition + 'px';
spider.style.top = topPosition + 'px';
