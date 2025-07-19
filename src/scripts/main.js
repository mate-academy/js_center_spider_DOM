'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallH = wall.offsetHeight;
const wallW = wall.offsetWidth;
const spiderH = spider.offsetHeight;
const spiderW = spider.offsetWidth;
const spiderPosH = (wallH - spiderH) / 2;
const spiderPosW = (wallW - spiderW) / 2;

spider.style.position = 'absolute';
spider.style.top = `${spiderPosH}px`;
spider.style.left = `${spiderPosW}px`;
