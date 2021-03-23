'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderLeft = (wall.clientWidth / 2) - (spider.width / 2);
const spiderBottom = (wall.clientHeight / 2) - (spider.width / 2);

spider.style.position = 'absolute';
spider.style.top = `${spiderBottom}px`;
spider.style.left = `${spiderLeft}px`;
