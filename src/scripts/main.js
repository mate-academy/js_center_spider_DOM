'use strict';

const spider = document.querySelector('.spider');
const wall = spider.parentElement;

const { width: wallWidth, height: wallHeight } = wall.getBoundingClientRect();

const { width: spiderWidth, height: spiderHeight } =
  spider.getBoundingClientRect();

spider.style.left = `${(wallWidth - spiderWidth) / 2 - 10}px`;
spider.style.top = `${(wallHeight - spiderHeight) / 2 - 10}px`;
