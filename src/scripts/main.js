'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

spider.style.marginTop = `${wallHeight / 2 - (spider.clientHeight / 2)}px`;
spider.style.marginLeft = `${wallWidth / 2 - spider.clientWidth / 2}px`;
