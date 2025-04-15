'use strict';

const container = document.querySelector('.wall');
const spider = document.querySelector('.spider');

container.style.position = 'relative';
spider.style.position = 'absolute';

const containerWidth =  container.offsetWidth;
const spiderWidth = spider.offsetWidth;

spider.style.left = `${(containerWidth - spiderWidth) / 2}px`;

const containerHeight =  container.offsetHeight;
const spiderHeight = spider.offsetHeight;

spider.style.top = `${(containerHeight - spiderHeight) / 2}px`;

