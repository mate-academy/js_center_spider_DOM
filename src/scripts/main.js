'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

// какой вариант лучше использовать getComputedStyle или clientWidth?

// const wallStyle = getComputedStyle(wall);
// spider.style.left = `${parseFloat(wallStyle.width) / 2}px`;
// spider.style.top = `${parseFloat(wallStyle.height) / 2}px`;

spider.style.left = `${wallWidth / 2}px`;
spider.style.top = `${wallHeight / 2}px`;
spider.style.transform = 'translate(-50%, -50%)';
