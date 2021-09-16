'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const styling = getComputedStyle(spider);
const width = parseFloat(styling.width);
const height = parseFloat(styling.height);

const wallStyle = getComputedStyle(wall);
const wallWidth = parseFloat(wallStyle.width);
const wallHeigt = parseFloat(wallStyle.height);

spider.style.paddingTop = (wallWidth / 2) - (width / 2) + 'px';
spider.style.paddingLeft = (wallHeigt / 2) - (height / 2) + 'px';

// write code here
