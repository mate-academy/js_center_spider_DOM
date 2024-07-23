'use strict';
const div = document.querySelector('div');
const img = document.querySelector('img');
const wallCenter = div.clientWidth / 2;
const spiderCenter = img.offsetWidth / 2;
const center = wallCenter - spiderCenter;
img.style.top = `${center}px`;
img.style.left = `${center}px`;

console.log(spiderCenter);
