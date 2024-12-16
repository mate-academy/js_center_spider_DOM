'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const positionRight = wall.offsetHeight / 2 - 25;
const positionLeft = wall.offsetWidth / 2 - 25;

spider.style.top = `${positionRight}px`;
spider.style.left = `${positionLeft}px`;
