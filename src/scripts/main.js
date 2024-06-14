'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallParams = wall.getBoundingClientRect();
const spiderParams = spider.getBoundingClientRect();
const wallStyles = getComputedStyle(wall);
const borderTop = parseFloat(wallStyles.borderTopWidth);
const borderLeft = parseFloat(wallStyles.borderLeftWidth);

spider.style.top = `${wallParams.height / 2 - borderTop - spiderParams.height / 2}px`;
spider.style.left = `${wallParams.width / 2 - borderLeft - spiderParams.width / 2}px`;
