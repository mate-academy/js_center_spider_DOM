'use strict';

const field = document.querySelector('.wall');
const element = document.querySelector('.spider');

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const elementWidth = element.clientWidth;
const elementHeight = element.clientHeight;

element.style.position = 'absolute';
element.style.left = fieldWidth / 2 - elementWidth / 2 + 'px';
element.style.top = fieldHeight / 2 - elementHeight / 2 + 'px';
