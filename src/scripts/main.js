'use strict';

const spiderImg = document.querySelector('.spider');
const wallImg = document.querySelector('.wall');

const xCoords = (wallImg.clientWidth - spiderImg.clientWidth) / 2;
const yCoords = (wallImg.clientHeight - spiderImg.clientHeight) / 2;

spiderImg.style.left = `${xCoords}px`;
spiderImg.style.top = `${yCoords}px`;
