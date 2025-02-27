'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const coordsWall = wall.getBoundingClientRect();
const coordsSpider = spider.getBoundingClientRect();

spider.style.left = coordsWall.width / 2 - 10 - coordsSpider.width / 2 + 'px';
spider.style.top = coordsWall.height / 2 - 10 - coordsSpider.height / 2 + 'px';
