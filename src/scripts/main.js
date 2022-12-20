'use strict';

const spider = document.querySelector('.spider');

const widthWall = spider.offsetParent.clientWidth;
const heightWall = spider.offsetParent.clientHeight;
const heightSpider = spider.offsetHeight;
const widthSpider = spider.offsetWidth;

spider.style.top = `${heightWall / 2 - heightSpider / 2}px`;
spider.style.left = `${widthWall / 2 - widthSpider / 2}px`;
