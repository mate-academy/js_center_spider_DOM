'use strict';

const field = document.querySelector('.wall');
const img = document.querySelector('.spider');
const topPosition = field.clientHeight / 2;
const leftPositon = field.clientWidth / 2;

img.style.top = `${topPosition}px`;
img.style.left = `${leftPositon}px`;
img.style.transform = 'translate(-50%, -50%)';
