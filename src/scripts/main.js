'use strict';

const spyder = document.querySelector('img');
const wall = document.querySelector('div');

const style = getComputedStyle(wall);

spyder.style.top = `${parseFloat(style.height) * 0.5}px`;
spyder.style.left = `${parseFloat(style.width) * 0.5}px`;
spyder.style.transform = 'translate(-50%, -50%)';
