'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

window.addEventListener('load', () => {
  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  const wallStyles = getComputedStyle(wall);
  const paddingLeft = parseFloat(wallStyles.paddingLeft);
  const paddingTop = parseFloat(wallStyles.paddingTop);

  const left = (wall.clientWidth - spider.offsetWidth) / 2 + paddingLeft;
  const topPoint = (wall.clientHeight - spider.offsetHeight) / 2 + paddingTop;

  spider.style.left = `${left}px`;
  spider.style.top = `${topPoint}px`;
});
