'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const coordsSpider = spider.getBoundingClientRect();

spider.style.position = 'absolute';
spider.style.display = 'block';
spider.style.left = `${wall.clientWidth / 2 - coordsSpider.width / 2}px`;
spider.style.top = `${wall.clientHeight / 2 - coordsSpider.height / 2}px`;
