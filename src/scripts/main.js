'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderStyle = getComputedStyle(spider);
const width = parseFloat(spiderStyle.width);
const height = parseFloat(spiderStyle.height);

const wallStyle = getComputedStyle(wall);
const wallWidth = parseFloat(wallStyle.width);
const wallHeigt = parseFloat(wallStyle.height);

spider.style.paddingTop = (wallWidth / 2) - (width / 2) + 'px';
spider.style.paddingLeft = (wallHeigt / 2) - (height / 2) + 'px';
