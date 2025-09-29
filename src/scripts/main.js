'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (!wall || !spider) {
  throw new Error('Missing required DOM elements: .wall or .spider');
}

const wallStyle = getComputedStyle(wall);

if (wallStyle.position === 'static') {
  wall.style.position = 'relative';
}

window.addEventListener('load', () => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const leftSteps = (wallRect.width - spiderRect.width) / 2;
  const topSteps = (wallRect.height - spiderRect.height) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${leftSteps}px`;
  spider.style.top = `${topSteps}px`;
});
