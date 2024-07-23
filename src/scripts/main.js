'use strict';

const div = document.querySelector('.wall');
const img = document.querySelector('.spider');
const center = div.clientWidth / 2 - img.offsetWidth / 2;

img.style.top = `${center}px`;
img.style.left = `${center}px`;
