'use strict';

const box = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const y = box.clientWidth / 2 - spider.width / 2;
const x = box.clientHeight / 2 - spider.height / 2;

spider.style.top = `${y}px`;
spider.style.left = `${x}px`;
