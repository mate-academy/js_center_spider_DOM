'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const marginLeft = (wall.clientWidth - spider.clientWidth) / 2;
const marginTop = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.marginLeft = `${marginLeft}px`;
spider.style.marginTop = `${marginTop}px`;
