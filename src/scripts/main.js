'use strict';

const spider = document.querySelector('img');
const wall = document.querySelector('div');

const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;

const topСoordinates = (wall.offsetHeight - spiderHeight) / 2;
const leftCoordinates = (wall.offsetWidth - spiderWidth) / 2;

spider.style.top = `${topСoordinates}px`;
spider.style.left = `${leftCoordinates}px`;
