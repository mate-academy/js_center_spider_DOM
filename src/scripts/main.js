'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const { width: wallWidth, height: wallHeight } = wall.getBoundingClientRect();
  const { width: spiderWidth, height: spiderHeight } =
    spider.getBoundingClientRect();

  const centerX = (wallWidth - spiderWidth) / 2;
  const centerY = (wallHeight - spiderHeight) / 2;

  Object.assign(spider.style, {
    position: 'absolute',
    left: `${centerX}px`,
    top: `${centerY}px`,
  });
});
