'use strict';

function centerTheSpider() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallSize = {
    width: wall.clientWidth,
    height: wall.clientHeight,
  };

  const spiderSize = {
    width: spider.clientWidth,
    height: spider.clientHeight,
  };

  spider.style.position = 'relative';
  spider.style.left = `${wallSize.width / 2 - spiderSize.width / 2}px`;
  spider.style.top = `${wallSize.height / 2 - spiderSize.height / 2}px`;
}

centerTheSpider();
