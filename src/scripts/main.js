'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const wallWidth = wall.clientWidth;
const centerH = (wallWidth - spiderWidth) / 2;

const spiderHeight = spider.clientHeight;
const wallHeight = wall.clientHeight;
const centerV = (wallHeight - spiderHeight) / 2;

spider.style.marginLeft = centerH + 'px';
spider.style.marginTop = centerV + 'px';
