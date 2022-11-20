'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderHalfHeight = parseFloat(spider.clientHeight) / 2;
const wallHalfHeight = parseFloat(wall.clientHeight) / 2;
const spiderSlide = wallHalfHeight - spiderHalfHeight;

spider.style.marginTop = `${spiderSlide}px`;
spider.style.marginLeft = `${spiderSlide}px`;
