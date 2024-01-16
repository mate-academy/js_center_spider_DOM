'use strict';

const wall = document.querySelector(' .wall ');
const spider = document.querySelector(' .spider ');

const x = (wall.clientWidth - Number(spider.width)) / 2;
const y = (wall.clientHeight - Number(spider.height)) / 2;

spider.style.position = 'absolute';
spider.style.left = x + 'px';
spider.style.top = y + 'px';
