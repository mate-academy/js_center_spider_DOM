'use strict';

const image = document.querySelector('.spider');
const wall = document.querySelector('.wall');

image.style.top = `${(wall.clientHeight / 2) - (image.clientHeight / 2)}px`;
image.style.left = `${(wall.clientWidth / 2) - (image.clientWidth / 2)}px`;
