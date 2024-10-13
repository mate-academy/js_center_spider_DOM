'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const topSpider =
  wall.getBoundingClientRect().height / 2 -
  spider.getBoundingClientRect().height / 2;
const leftSpider =
  wall.getBoundingClientRect().width / 2 -
  spider.getBoundingClientRect().width / 2;

spider.style.top = `${topSpider}px`;
spider.style.left = `${leftSpider}px`;
