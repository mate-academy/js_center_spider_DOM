'use strict';

const fieldWall = document.querySelector('.wall');
const spiderField = document.querySelector('.spider');

const wallWidth = fieldWall.clientWidth;
const wallHeight = fieldWall.clientHeight;

const spiderWidth = spiderField.offsetWidth;
const spiderHeight = spiderField.offsetHeight;

spiderField.style.left = (wallWidth - spiderWidth) / 2 + 'px';
spiderField.style.top = (wallHeight - spiderHeight) / 2 + 'px';
