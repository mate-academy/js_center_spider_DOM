'use strict';

const spider = document.getElementsByClassName('spider');
const wall = document.getElementsByClassName('wall');
const wallComputedStyle = window.getComputedStyle(wall[0]);

const wallHeightValue = parseFloat(wallComputedStyle.height);
const wallWidthValue = parseFloat(wallComputedStyle.width);
const spH = parseFloat(window.getComputedStyle(spider[0]).height);
const spW = parseFloat(window.getComputedStyle(spider[0]).width);

spider[0].style.top = wallHeightValue / 2 - spH / 2 + 'px';
spider[0].style.left = wallWidthValue / 2 - spW / 2 + 'px';
