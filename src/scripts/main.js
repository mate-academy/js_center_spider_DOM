'use strict';

const fieldWidth = document.querySelector('.wall').clientWidth;
const fieldHeight = document.querySelector('.wall').clientHeight;
const spiderWidth = document.querySelector('.spider').clientWidth;
const spiderHeight = document.querySelector('.spider').clientHeight;

const spider = document.querySelector('.spider');

spider.style.left = (fieldWidth / 2 - spiderWidth / 2) + 'px';
spider.style.top = (fieldHeight / 2 - spiderHeight / 2) + 'px';
