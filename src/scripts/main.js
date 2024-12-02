'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const halfSpiderSize = spider.getBoundingClientRect().height / 2;

const topSpider = Math.round(wall.clientHeight / 2 - halfSpiderSize);
const leftSpider = Math.round(wall.clientWidth / 2 - halfSpiderSize);

spider.style.top = `${topSpider}px`;
spider.style.left = `${leftSpider}px`;
