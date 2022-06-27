'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const PositionY = (wall.clientHeight - spider.clientHeight) / 2;
const PositionX = (wall.clientWidth - spider.clientWidth) / 2;

spider.style.top = PositionY + 'px';
spider.style.left = PositionX + 'px';
