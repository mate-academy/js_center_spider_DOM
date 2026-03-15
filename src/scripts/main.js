'use strict';

function centerSpider() {
  const wall = document.querySelector('.wall');

  wall.style.position = 'relative';

  const spider = document.querySelector('.spider');

  spider.style.position = 'absolute';

  const reactWall = wall.getBoundingClientRect();
  const reactSpider = spider.getBoundingClientRect();

  const centerX = reactWall.width / 2;
  const centerY = reactWall.height / 2;

  const x = centerX - reactSpider.width / 2;
  const y = centerY - reactSpider.height / 2;

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
}

centerSpider();
