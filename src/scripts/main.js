'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWigth = wall.clientWidth;
const wallHeightCenter = wallHeight / 2;
const wallWigthCenter = wallWigth / 2;

spider.style.top = `${wallHeightCenter}px`;
spider.style.left = `${wallWigthCenter}px`;
spider.style.transform = 'translate(-50%, -50%)';
