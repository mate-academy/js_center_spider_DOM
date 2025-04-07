'use strict';

const wallEl = document.querySelector('.wall');
const spiderEl = document.querySelector('.spider');

spiderEl.style.top = (wallEl.clientHeight - spiderEl.clientHeight) / 2 + 'px';

spiderEl.style.left = (wallEl.clientWidth - spiderEl.clientWidth) / 2 + 'px';
