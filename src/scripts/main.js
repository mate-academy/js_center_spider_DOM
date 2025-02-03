'use strict';

// write code here
const pole = document.querySelector('.wall');
const element = document.querySelector('.spider');

const poleSize = pole.getBoundingClientRect();
const elementSize = element.getBoundingClientRect();

const x = (poleSize.width - elementSize.width) / 2;
const y = (poleSize.height - elementSize.height) / 2;

element.style.position = 'absolute';
element.style.left = x + 'px';
element.style.top = y + 'px';
