'use strict';

const spiderImg = document.querySelector('.spider');

const spiderWidth = spiderImg.offsetWidth;
const spiderHeight = spiderImg.offsetHeight;

const field = document.querySelector('.wall');

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const x = (fieldWidth - spiderWidth) / 2;
const y = (fieldHeight - spiderHeight) / 2;

spiderImg.style.left = x + 'px';
spiderImg.style.top = y + 'px';
