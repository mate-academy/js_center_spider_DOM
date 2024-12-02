'use strict';

const wallEl = document.querySelector('.wall');
const spiderEl = document.querySelector('.spider');

spiderEl.style.top =
  Math.round(wallEl.clientHeight / 2 - spiderEl.clientHeight / 2) + 'px';

spiderEl.style.left =
  Math.round(wallEl.clientWidth / 2 - spiderEl.clientWidth / 2) + 'px';
