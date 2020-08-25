'use strict';

const wall = document.querySelector('.wall');
const wallHight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spider = document.querySelector('.spider');
const spiderHight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;

spider.style.top = `${wallHight / 2 - spiderHight / 2}px`;
spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;
