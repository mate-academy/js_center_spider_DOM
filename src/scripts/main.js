'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldLeft = field.clientHeight;
const fieldTop = field.clientWidth;
const spiderRect = spider.getBoundingClientRect();

const topPosition = (fieldTop - spiderRect.height) / 2;
const leftPosition = (fieldLeft - spiderRect.width) / 2;

spider.style.position = 'absolut';
spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
