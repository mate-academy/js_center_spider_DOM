'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const cordW = wall.getBoundingClientRect();
const cordS = spider.getBoundingClientRect();

const topSp = cordW.height / 2 - cordS.height / 2;
const leftSp = cordW.width / 2 - cordS.width / 2;

spider.style.top = topSp + 'px';
spider.style.left = leftSp + 'px';
