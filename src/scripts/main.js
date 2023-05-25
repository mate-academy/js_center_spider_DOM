'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.offsetWidth;
const wallHeigth = wall.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const centerPositionWidth = (wallWidth - spiderWidth) / 2;
const centerPositionHeight = (wallHeigth - spiderHeight) / 2;

spider.style.position = 'relative';
spider.style.left = centerPositionWidth + 'px';
spider.style.top = centerPositionHeight + 'px';

