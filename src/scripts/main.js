'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const center = `${wall.clientWidth / 2 - spider.clientWidth / 2}px,
${wall.clientHeight / 2 - spider.clientHeight / 2}px`;

spider.style.transform = `translate(${center})`;
