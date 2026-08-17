'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');

  const wallStyles = getComputedStyle(wall);

  const spider = document.querySelector('.spider');

  const wallWidth = wall.offsetWidth
    - parseInt(wallStyles.borderLeftWidth)
    - parseInt(wallStyles.borderRightWidth);

  const wallHeight = wall.offsetHeight
    - parseInt(wallStyles.borderTopWidth)
    - parseInt(wallStyles.borderBottomWidth);

  const topWall = wallHeight / 2 - spider.offsetHeight / 2;

  const leftWall = wallWidth / 2 - spider.offsetWidth / 2;

  wall.style.position = 'relative';

  spider.style.position = 'absolute';

  spider.style.top = `${topWall}px`;

  spider.style.left = `${leftWall}px`;
});
