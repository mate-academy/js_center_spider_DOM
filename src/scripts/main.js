'use strict';

const spiderContainer = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftPosition = (spiderContainer.clientHeight - spider.clientHeight) / 2;
const topPosition = (spiderContainer.clientWidth - spider.clientWidth) / 2;

spider.style.left = `${leftPosition}px`;
spider.style.top = `${topPosition}px`;
