'use strict';

const spider = document.querySelector('.spider');
const wallStyles = getComputedStyle(document.querySelector('.wall'));
const spiderStyles = getComputedStyle(spider);

const wallHalfHeidht = parseFloat(wallStyles.height) / 2;
const spiderHalfHeidht = parseFloat(spiderStyles.height) / 2;
const wallHalfWidth = parseFloat(wallStyles.width) / 2;
const spiderHalfWidth = parseFloat(spiderStyles.width) / 2;

spider.style.top = `${wallHalfHeidht - spiderHalfHeidht}px`;
spider.style.left = `${wallHalfWidth - spiderHalfWidth}px`;
