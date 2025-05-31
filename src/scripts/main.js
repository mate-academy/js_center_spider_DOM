'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.addEventListener('load', () => {
  const sizeWall = wall.getBoundingClientRect();
  const sizeSpider = spider.getBoundingClientRect();

  const left = (sizeWall.width - sizeSpider.width) / 2;
  // eslint-disable-next-line no-shadow
  const top = (sizeWall.height - sizeSpider.height) / 2;

  wall.style.position = 'relative';
  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
