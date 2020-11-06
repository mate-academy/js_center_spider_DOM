'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const calcElSize = (el) => {
  return el / 2;
};

const widthWall = wall.clientWidth;
const heightWall = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const centerWidth = calcElSize(widthWall) - calcElSize(spiderWidth);
const centerHeight = calcElSize(heightWall) - calcElSize(spiderHeight);

spider.style.top = centerWidth + 'px';
spider.style.left = centerHeight + 'px';
