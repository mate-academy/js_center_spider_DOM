'use strict';

const spider = document.querySelector('.spider');

const wallWidth = spider.offsetParent.clientWidth;
const wallHeight = spider.offsetParent.clientHeight;
const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;

spider.style.top = `${wallHeight / 2 - spiderHeight / 2}px`;
spider.style.left = `${wallWidth / 2 - spiderWidth / 2}px`;

// console.log(spider.style.left);
