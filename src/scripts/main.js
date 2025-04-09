'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

spider.addEventListener('load', () => {
  const left = (wall.clientWidth - spider.offsetWidth) / 2;
  const top = (wall.clientHeight - spider.offsetHeight) / 2;

  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
