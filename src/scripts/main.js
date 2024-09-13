'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const spiderLeft = (wallWidth - spiderWidth) / 2;
const spiderTop = (wallHeight - spiderHeight) / 2;

spider.style.position = 'absolute';
spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;

wall.append(spider);
