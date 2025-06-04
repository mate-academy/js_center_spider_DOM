'use strict';

const spider = document.querySelector('.spider');

const wallWidth = document.querySelector('.wall').clientWidth;
const wallHeight = document.querySelector('.wall').clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
