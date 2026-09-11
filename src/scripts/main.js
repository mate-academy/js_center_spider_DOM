'use strict';

const spider = document.querySelector('.spider');
const wall = spider.parentElement;

function centerSpider() {
  spider.style.left = `${(wall.offsetWidth - spider.offsetWidth) / 2}px`;
  spider.style.top = `${(wall.offsetHeight - spider.offsetHeight) / 2}px`;
}

centerSpider();
