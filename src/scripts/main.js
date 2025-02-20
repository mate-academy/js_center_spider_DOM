'use strict';

window.onload = () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const centerSpider = () => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const centerX = (wallRect.width - spiderRect.width) / 2;
    const centerY = (wallRect.height - spiderRect.height) / 2;

    spider.style.transform = `translate(${centerX}px, ${centerY}px)`;
  };

  centerSpider();
};
