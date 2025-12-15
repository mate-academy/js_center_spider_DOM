'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.onload = () => {
  const left = (wall.clientWidth - spider.clientWidth) / 2;
  const topPosition = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.left = `${left}px`;
  spider.style.top = `${topPosition}px`;
};
