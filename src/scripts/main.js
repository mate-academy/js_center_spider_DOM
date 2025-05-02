'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');


const topSpider  = Math.round(wall.clientHeight / 2 - spider.offsetHeight / 2);
const leftSpider = Math.round(wall.clientWidth / 2 - spider.offsetWidth / 2 );

spider.style.left = leftSpider + 'px';
spider.style.top = topSpider  + 'px';

