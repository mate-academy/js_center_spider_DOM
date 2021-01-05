'use strict';

const wally = document.querySelector('.wall');
const spidy = document.querySelector('.spider');

const spiderPosition
  = wally.clientWidth / 2 - spidy.clientWidth / 2;

spidy.style.top = `${spiderPosition}px`;
spidy.style.left = `${spiderPosition}px`;
