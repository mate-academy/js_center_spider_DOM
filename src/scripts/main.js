'use strict';

const base = document.querySelector('.wall');
const dot = document.querySelector('.spider');
const style = getComputedStyle(base);

dot.style.top = `${parseFloat(style.height) / 2}px`;
dot.style.left = `${parseFloat(style.width) / 2}px`;
dot.style.transform = 'translate(-50%, -50%)';
