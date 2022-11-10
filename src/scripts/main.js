'use strict';

const div = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const width = div.clientWidth / 2 - spider.clientWidth / 2;
const height = div.clientHeight / 2 - spider.clientHeight / 2;

spider.style.marginLeft = `${width}px`;
spider.style.marginTop = `${height}px`;
