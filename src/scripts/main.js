'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderWidth = parseInt(spider.offsetWidth);

spider.style.marginLeft = `${
  (wall.clientWidth - spiderWidth) / 2
}px`;

spider.style.marginTop = `${
  (wall.clientHeight - spiderWidth) / 2
}px`;
