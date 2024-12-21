'use strict';

const img = document.querySelector('img.spider');
const div = document.querySelector('div.wall');

img.style.top = div.clientHeight / 2 - img.clientHeight / 2 + 'px';
img.style.left = div.clientWidth / 2 - img.clientWidth / 2 + 'px';
