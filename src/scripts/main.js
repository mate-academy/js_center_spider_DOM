'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth / 2;
const wallHeight = wall.clientHeight / 2;

const spiderHeight = spider.getBoundingClientRect().height / 2;
const spiderWidth = spider.getBoundingClientRect().width / 2;

spider.style.top = `${wallHeight - spiderHeight}px`;
spider.style.left = `${wallWidth - spiderWidth}px`;
