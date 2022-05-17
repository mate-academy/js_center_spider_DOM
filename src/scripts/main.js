'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const positionTop = wall.clientHeight / 2 - spider.clientHeight / 2;
const positionLeft = wall.clientWidth / 2 - spider.clientWidth / 2;

spider.style.cssText = `top: ${positionTop}px; left: ${positionLeft}px`;
