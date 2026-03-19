'use strict';

const elemSpider = document.querySelector('.spider');
const elemWall = document.querySelector('.wall');

const x = (elemWall.clientWidth - elemSpider.offsetWidth) / 2;
const y = (elemWall.clientHeight - elemSpider.offsetHeight) / 2;

elemSpider.style.top = `${y}px`;
elemSpider.style.left = `${x}px`;
