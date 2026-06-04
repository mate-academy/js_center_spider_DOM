'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallOffsetWidth = wall.offsetWidth;
const wallOffsetHeight = wall.offsetHeight;
const wallStyles = getComputedStyle(wall);
const borderLeft = parseInt(wallStyles.borderLeftWidth, 10);

const borderTop = parseInt(wallStyles.borderTopWidth, 10);

const spiderOffsetWidth = spider.offsetWidth;
const spiderOffsetHeight = spider.offsetHeight;

const spiderLeft = wallOffsetWidth / 2 - spiderOffsetWidth / 2 - borderLeft;

const spiderTop = wallOffsetHeight / 2 - spiderOffsetHeight / 2 - borderTop;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
