'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (!wall || !spider) {
  throw new Error('Wall or spider not found');
}

function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

function centerSpider() {
  spider.style.left = `${wall.clientWidth / 2 - spider.offsetWidth / 2}px`;
  spider.style.top = `${wall.clientHeight / 2 - spider.offsetHeight / 2}px`;
}

document.addEventListener('DOMContentLoaded', () => {
  centerSpider();
  spider.addEventListener('load', centerSpider);
});

window.addEventListener('resize', debounce(centerSpider, 100));
