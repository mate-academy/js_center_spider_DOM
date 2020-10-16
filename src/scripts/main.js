'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;
const convertWallWidth = parseFloat(wallWidth);
const convertWallHeight = parseFloat(wallHeight);
const shiftX = `calc(${convertWallWidth / 2}px - 50%)`;
const shiftY = `calc(${convertWallHeight / 2}px - 50%)`;

spider.style.transform = `translate(${shiftX}, ${shiftY})`;
