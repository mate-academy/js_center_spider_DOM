'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerX = wall.clientWidth / 2;
const centerY = wall.clientHeight / 2;

const centerXSpider = spider.clientWidth / 2;
const centerYSpider = spider.clientHeight / 2;

spider.style = `
  top: ${centerY - centerYSpider}px;
  left: ${centerX - centerXSpider}px;
`;
