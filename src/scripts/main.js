'use strict';

const field = document.querySelector('.wall');
const image = document.querySelector('.spider');

image.style.left = `${field.clientWidth / 2 - image.offsetWidth / 2}px`;
image.style.top = `${field.clientHeight / 2 - image.offsetHeight / 2}px`;
