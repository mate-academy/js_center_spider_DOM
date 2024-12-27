'use strict';

// write code here

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const heigth = wall.getBoundingClientRect().height / 2 - 50;
const weigth = wall.getBoundingClientRect().width / 2 - 50;

spider.style.top = `${heigth}px`;
spider.style.left = `${weigth}px`;
