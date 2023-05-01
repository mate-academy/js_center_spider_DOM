'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${(wall.clientHeight / 2) - (spider.clientHeight / 2)}px`;
spider.style.left = `${(wall.clientWidth / 2) - (spider.clientWidth / 2)}px`;

/*
const wallStyle = getComputedStyle(wall);
const spiderStyle = getComputedStyle(spider);

const wallWidth = parseFloat(wallStyle.width);
const wallHeight = parseFloat(wallStyle.height);
const spiderWidth = parseFloat(spiderStyle.width);
const spiderHeight = parseFloat(spiderStyle.height);

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
*/
