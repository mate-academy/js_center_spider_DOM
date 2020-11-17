'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHalfWidth = (parseInt(wall.clientWidth) / 2);
const wallHalfHeight = (parseInt(wall.clientHeight) / 2);

const spiderHalfWidth = (parseInt(spider.clientWidth) / 2);
const spiderHalfHeight = (parseInt(spider.clientHeight) / 2);

spider.style.top = `${wallHalfWidth - spiderHalfWidth}px`;
spider.style.left = `${wallHalfHeight - spiderHalfHeight}px`;
