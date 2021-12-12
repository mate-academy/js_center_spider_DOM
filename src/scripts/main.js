'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.clientWidth;
const wallHeigth = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeigth = spider.clientHeight;

const centerWallX = wallWidth / 2 - spiderWidth / 2;
const centerWallY = wallHeigth / 2 - spiderHeigth / 2;

spider.style.left = centerWallX + 'px';
spider.style.top = centerWallY + 'px';
