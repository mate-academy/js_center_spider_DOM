'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderParams = spider.getBoundingClientRect();

spider.style.top = wall.clientHeight / 2 - spiderParams.height / 2 + 'px';
spider.style.left = wall.clientWidth / 2 - spiderParams.width / 2 + 'px';
