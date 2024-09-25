'use strict';

const wall = document.querySelector('.wall');
const image = document.querySelector('.spider');

wall.style.position = 'relative';
image.style.position = 'absolute';

const centerH = wall.clientHeight / 2 - image.clientHeight / 2;
const centerW = wall.clientWidth / 2 - image.clientWidth / 2;

image.style.top = centerH + 'px';
image.style.left = centerW + 'px';
