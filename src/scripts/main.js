'use strict';

const spider = document.querySelector('.spider');
const parent = spider.offsetParent;
const parentStyle = window.getComputedStyle(parent);
const parentWidth = parseFloat(parentStyle.width);
const parentHeight = parseFloat(parentStyle.height);

const spiderStyle = window.getComputedStyle(spider);
const spiderWidth = parseFloat(spiderStyle.width);
const spiderHeight = parseFloat(spiderStyle.height);

spider.style.top = `${parentHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${parentWidth / 2 - spiderWidth / 2}px`;
