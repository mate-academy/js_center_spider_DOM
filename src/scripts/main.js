'use strict';

'use strict';

window.addEventListener('load', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const leftOffset = (wallWidth - spiderWidth) / 2;
  const topOffset = (wallHeight - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${leftOffset}px`;
  spider.style.top = `${topOffset}px`;
});
