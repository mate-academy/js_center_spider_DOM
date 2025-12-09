'use strict';

function init() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const offsetX = (wall.clientWidth - spider.clientWidth) / 2;
  const offsetY = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
}

window.addEventListener('load', init);
