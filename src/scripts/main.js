'use strict';

const brick = document.querySelector('.wall');
const element = document.querySelector('.spider');

const width = brick.clientWidth / 2 - element.offsetWidth / 2;
const height = brick.clientHeight / 2 - element.offsetHeight / 2;

element.style = `top: ${height}px;  left: ${width}px`;
