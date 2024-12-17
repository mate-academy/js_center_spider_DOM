'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const centerSpiderhorizont = wall.clientWidth / 2 - spider.clientWidth / 2;
const centerSpidervertical = wall.clientHeight / 2 - spider.clientHeight / 2;

spider.style.top = `${centerSpidervertical}px`;
spider.style.left = `${centerSpiderhorizont}px`;
