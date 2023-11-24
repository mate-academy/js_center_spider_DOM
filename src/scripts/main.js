'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderX = (wall.scrollWidth - spider.width) / 2;
const spiderY = (wall.scrollHeight - spider.height) / 2;

spider.style.marginTop = spiderY + 'px';
spider.style.marginLeft = spiderX + 'px';
