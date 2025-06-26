'use strict';

const block = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const centerWidth = block.clientWidth / 2 - spider.offsetWidth / 2 + 'px';
const centerHeight = block.clientHeight / 2 - spider.offsetHeight / 2 + 'px';

spider.style.left = centerWidth;
spider.style.top = centerHeight;
