'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWitdh = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${wallWitdh / 2 - spiderWidth / 2}px`;
