'use strict';

const spider = document.querySelector('.spider');
const spiderWall = document.querySelector('.wall');

spider.style.top = `${(spiderWall.clientHeight - spider.offsetHeight) / 2}px`;

spider.style.left = `${(spiderWall.clientWidth - spider.offsetWidth) / 2}px`;
