'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const widthCenter = (wall.clientWidth / 2) - (spider.clientWidth / 2);
const heightCenter = (wall.clientHeight / 2) - (spider.clientHeight / 2);

spider.style.left = `${widthCenter}px`;
spider.style.top = `${heightCenter}px`;
