'use strict';

const div = document.querySelector('.wall');

const img = document.querySelector('.spider');

img.style.left = Math.round(div.clientWidth / 2 - img.offsetWidth / 2) + 'px';
img.style.top = Math.round(div.clientHeight / 2 - img.offsetHeight / 2) + 'px';
