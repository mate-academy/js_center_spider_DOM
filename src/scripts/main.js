'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const spiderTopPos = (wallHeight - spiderHeight) / 2;
const spiderLeftPos = (wallWidth - spiderWidth) / 2;

spider.style.top = `${spiderTopPos}px`;
spider.style.left = `${spiderLeftPos}px`;
