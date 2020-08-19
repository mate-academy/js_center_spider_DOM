'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallStyle = window.getComputedStyle(wall);
const spiderStyle = window.getComputedStyle(spider);

spider.style.top = `${parseFloat(wallStyle.width)
    / 2 - parseFloat(spiderStyle.width) / 2}px`;

spider.style.left = `${parseFloat(wallStyle.height)
    / 2 - parseFloat(spiderStyle.height) / 2}px`;
