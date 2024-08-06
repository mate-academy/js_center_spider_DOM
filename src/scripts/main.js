'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderHeighStart = spider.getBoundingClientRect().height;
const spiderWidthStart = spider.getBoundingClientRect().width;

const spiderHeighCenter = (wallHeight - spiderHeighStart) / 2;
const spiderWidthCenter = (wallWidth - spiderWidthStart) / 2;

spider.style.top = `${spiderHeighCenter}px`;
spider.style.left = `${spiderWidthCenter}px`;
