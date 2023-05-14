'use strict';

const picture = document.querySelector('.spider');
const block = document.querySelector('.wall');

picture.style.top = `${block.clientHeight / 2 - picture.clientHeight / 2}px`;
picture.style.left = `${block.clientWidth / 2 - picture.clientWidth / 2}px`;
