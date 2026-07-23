'use strict';

const moved = (wall) => {
  const spider = document.querySelector('.spider');

  spider.style.position = 'absolute';

  const left = (wall.clientWidth - spider.offsetWidth) / 2 + 'px';
  const topPosition = (wall.clientHeight - spider.offsetHeight) / 2 + 'px';

  spider.style.left = left;
  spider.style.top = topPosition;
};

moved(document.querySelector('.wall'));
