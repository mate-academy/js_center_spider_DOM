'use strict';

const wallEl = document.querySelector('.wall');
const spiderEl = document.querySelector('.spider');

const spiderRect = spiderEl.getBoundingClientRect();

const leftKoord = wallEl.clientWidth / 2 - spiderRect.width / 2;
const topKoord = wallEl.clientHeight / 2 - spiderRect.height / 2;

wallEl.style.position = 'relative';
spiderEl.style.position = 'absolute';
spiderEl.style.left = leftKoord + 'px';
spiderEl.style.top = topKoord + 'px';
