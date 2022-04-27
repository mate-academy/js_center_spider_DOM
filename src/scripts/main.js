'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const width = wall.clientWidth / 2 - spider.offsetWidth / 2;
const height = wall.clientHeight / 2 - spider.offsetHeight / 2;

spider.style = `top: ${width}px; left: ${height}px`;
