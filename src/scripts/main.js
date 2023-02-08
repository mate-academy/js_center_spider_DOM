'use strict';

const wall = document.getElementsByClassName('wall');
const spider = document.getElementsByClassName('spider');

const wallStyles = window.getComputedStyle(wall[0]);
const border = +(wallStyles.borderWidth.slice(0, -2));

spider[0].style.marginTop = `${wall[0].offsetHeight / 2
- spider[0].offsetHeight / 2 - border}px`;

spider[0].style.marginLeft = `${wall[0].offsetWidth / 2
- spider[0].offsetWidth / 2 - border}px`;
