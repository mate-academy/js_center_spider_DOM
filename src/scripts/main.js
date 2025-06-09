'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.position = 'absolute';

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const left = (wallWidth - spiderWidth) / 2;
const topParams = (wallHeight - spiderHeight) / 2;

spider.style.left = `${left}px`;
spider.style.top = `${topParams}px`;
