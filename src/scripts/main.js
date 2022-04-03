'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const imageWidth = spider.offsetWidth;
const imageHeight = spider.offsetHeight;

const vpWidth = wall.clientWidth;
const vpHeight = wall.clientHeight;

spider.style.left = (vpWidth - imageWidth) / 2 + 'px';
spider.style.top = (vpHeight - imageHeight) / 2 + 'px';
