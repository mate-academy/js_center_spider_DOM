'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const offsetWidthValue = (wall.offsetWidth - spider.offsetWidth) / 2;
const offsetHeightValue = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.top = `${offsetWidthValue}px`;
spider.style.left = `${offsetHeightValue}px`;
