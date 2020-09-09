'use strict';

const myWall = document.querySelector('.wall');
const mySpider = document.querySelector('img');

mySpider.style.top = `${(myWall.clientHeight - mySpider.clientHeight) / 2}px`;
mySpider.style.left = `${(myWall.clientWidth - mySpider.clientWidth) / 2}px`;
