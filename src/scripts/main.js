'use strict';

const container = document.querySelector('div');
const spider = document.querySelector('img');

const containerHeight = container.offsetHeight;
const containerWidth = container.offsetWidth;
const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;
const spiderTop = (containerHeight - spiderHeight) / 2;
const spiderLeft = (containerWidth - spiderWidth) / 2;

spider.style.position = 'absolute';
spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;

console.log(container.offsetWidth);
