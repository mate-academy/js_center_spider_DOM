'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
// const wallStyles = getComputedStyle(wall);
// const paddingLeft = parseFloat(wallStyles.paddingLeft);
// const paddingTop = parseFloat(wallStyles.paddingTop);

wall.style.position = 'relative';
spider.style.position = 'absolute';

// const leftPos =
//  wall.offsetLeft + paddingLeft + (wall.clientWidth - spider.offsetWidth) / 2;
// const topPos =
//  wall.offsetTop + paddingTop + (wall.clientHeight - spider.offsetHeight) / 2;

// spider.style.left = `${leftPos}px`;
// spider.style.top = `${topPos}px`;

spider.style.left = `${(wall.clientWidth - spider.offsetWidth) / 2}px`;
spider.style.top = `${(wall.clientHeight - spider.offsetHeight) / 2}px`;
