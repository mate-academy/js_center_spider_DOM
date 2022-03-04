'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const yCor = (wall.clientHeight / 2) - (spider.clientHeight / 2);
const xCor = (wall.clientWidth / 2) - (spider.clientWidth / 2);

spider.style.top = `${yCor}px`;
spider.style.left = `${xCor}px`;
