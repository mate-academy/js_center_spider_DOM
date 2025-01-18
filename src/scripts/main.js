'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallReact = wall.getBoundingClientRect();
const spiderReact = spider.getBoundingClientRect();

const centerX = wallReact.width / 2 - spiderReact.width / 2;
const centerY = wallReact.height / 2 - spiderReact.height / 2;

spider.style.position = 'absolute';
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
