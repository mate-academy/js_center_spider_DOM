'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const topIndent = wall.clientHeight / 2 - spider.clientHeight / 2;
const rightIndent = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.top = `${topIndent}px`;
spider.style.left = `${rightIndent}px`;
