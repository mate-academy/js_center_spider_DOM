'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

spider.style.top = `${wallHeight / 2}px`;
spider.style.left = `${wallWidth / 2}px`;
spider.style.transform = 'translate(-50%, -50%)';
