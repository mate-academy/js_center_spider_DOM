'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerItem() {
  spider.style.left = wall.clientWidth / 2 - spider.clientWidth / 2 + 'px';
  spider.style.top = wall.clientWidth / 2 - spider.clientWidth / 2 + 'px';
}

centerItem();
