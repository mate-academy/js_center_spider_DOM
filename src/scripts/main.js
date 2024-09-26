'use strict';

const spider = document.querySelector('.spider');
const wallSize = document.querySelector('.wall').clientWidth;

spider.style.left = (wallSize - spider.offsetWidth) / 2 + 'px';
spider.style.top = (wallSize - spider.offsetHeight) / 2 + 'px';
