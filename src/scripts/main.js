'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;
const heightSpider = spider.offsetHeight;
const widthSpider = spider.offsetWidth;

spider.style.left = `${(widthWall - widthSpider) / 2}px`;
spider.style.top = `${(heightWall - heightSpider) / 2}px`;

// spider.style.top = '50%'; // easier way set spider in the middle of wall
// spider.style.left = '50%';
// spider.style.transform = 'translate(-50%, -50%)';
