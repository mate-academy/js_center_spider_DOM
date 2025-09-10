'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const x = (wall.clientWidth - spider.clientWidth) / 2;
const y = (wall.clientHeight - spider.clientHeight) / 2;

wall.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.top = `${Math.round(y)}px`;
spider.style.left = `${Math.round(x)}px`;
spider.style.transform = `translate(${-Math.round(x)}, ${-Math.round(y)})`;
