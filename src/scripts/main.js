'use strict';

const getCenterOffset = (parentEl, childEl) => {
  if (!parentEl || !childEl) {
    return null;
  }

  if (parentEl.clientHeight === 0 || parentEl.clientWidth === 0) {
    return null;
  }

  if (childEl.offsetHeight === 0 || childEl.offsetWidth === 0) {
    return null;
  }

  return {
    x: Math.round((parentEl.clientWidth - childEl.offsetWidth) / 2),
    y: Math.round((parentEl.clientHeight - childEl.offsetHeight) / 2),
  };
};

const setCoords = (el, coords) => {
  if (!el || !coords) {
    return;
  }

  el.style.top = `${coords.y}px`;
  el.style.left = `${coords.x}px`;
};

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const applyCenter = () => {
  if (!wall || !spider) {
    return;
  }

  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  spider.style.position = 'absolute';

  const coords = getCenterOffset(wall, spider);

  if (coords === null) {
    return;
  }

  setCoords(spider, coords);
};

if (spider.complete) {
  applyCenter();
} else {
  spider.addEventListener('load', applyCenter);
}
