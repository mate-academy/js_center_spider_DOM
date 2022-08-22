'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallWidth = wall.clientWidth;
const wallHight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHight = spider.clientHeight;

const spiderTop = `${wallHight / 2 - spiderHight / 2}`;

const spiderLeft = `${wallWidth / 2 - spiderWidth / 2}`;

spider.style.cssText = `top: ${spiderTop}px; left: ${spiderLeft}px;`;
