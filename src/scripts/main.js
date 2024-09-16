'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const box = wall.getBoundingClientRect();

spider.style.top = `${
  wall.offsetTop - box.top + wall.clientHeight / 2 - spider.clientHeight / 2
}px`;

spider.style.left = `${
  wall.offsetLeft - box.left + wall.clientWidth / 2 - spider.clientWidth / 2
}px`;
