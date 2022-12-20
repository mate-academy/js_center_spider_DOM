'use strict';

const spider = document.querySelector('.spider');

const widthWall = spider.offsetParent.clientWidth;
const heightWall = spider.offsetParent.clientHeight;

spider.style.top = `${heightWall / 2 - 25}px`;
spider.style.left = `${widthWall / 2 - 25}px`;
