'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const width = wall.clientWidth;
const height = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const spiderTop = (height - spiderHeight) / 2;
const spiderLeft = (width - spiderWidth) / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
