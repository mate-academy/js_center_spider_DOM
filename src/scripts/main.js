'use strict';

const element = document.querySelector('.spider');

const parentElement = document.querySelector('.wall');

const parentWidth = parentElement.clientWidth;
const parentHeight = parentElement.clientHeight;

const elementWidth = element.offsetWidth;
const elementHeight = element.offsetHeight;

const centerX = (parentWidth - elementWidth) / 2;
const centerY = (parentHeight - elementHeight) / 2;

element.style.position = 'absolute';
element.style.left = centerX + 'px';
element.style.top = centerY + 'px';
