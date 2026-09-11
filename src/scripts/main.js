'use strict';

const spider = document.querySelector('.spider');
const wall = spider.parentElement;

function centerSpider() {
  spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
  spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
}

document.addEventListener('DOMContentLoaded', centerSpider);
window.addEventListener('resize', centerSpider);
