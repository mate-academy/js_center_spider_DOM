'use strict';

const spider = document.querySelector('.spider');
const spiderHeigth = spider.clientHeight;
const spiderWidth = spider.clientWidth;
const wall = document.querySelector('.wall');
const wallHeigth = wall.clientHeight;
const wallWidth = wall.clientWidth;
const spiderTop = wallHeigth / 2 - spiderHeigth / 2;
const spiderLeft = wallWidth / 2 - spiderWidth / 2;

spider.setAttribute('style', `top: ${spiderTop}px; left: ${spiderLeft}px`);
