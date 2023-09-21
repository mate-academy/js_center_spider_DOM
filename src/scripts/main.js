'use strict';

const wall = document.querySelector('.wall');
const spidy = document.querySelector('.spider');

spidy.style.top = `${(wall.clientWidth - spidy.clientHeight) / 2}px`;
spidy.style.left = `${(wall.clientWidth - spidy.clientHeight) / 2}px`;
