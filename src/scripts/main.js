'use strict';

function getNewPosition(size, from, applyOn) {
  const relativeEl = document.querySelector(from);
  const absoluteEl = document.querySelector(applyOn);

  const whichSize = size === 'height' ? 'clientHeight' : 'clientWidth';
  const relativeElSize = relativeEl[whichSize];
  const absoluteElSize = absoluteEl.getBoundingClientRect()[size];
  const newElementPosition = (relativeElSize / 2) - (absoluteElSize / 2);

  return `${newElementPosition}px`;
}

const { style } = document.querySelector('.spider');

style.left = getNewPosition('width', '.wall', '.spider');
style.top = getNewPosition('height', '.wall', '.spider');
