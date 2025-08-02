'use strict';

const parentWall = document.querySelector('.wall');
const child = document.querySelector('.spider');

const parentWallWidth = parentWall.clientWidth;
const parentWallHeight = parentWall.clientHeight;

const childWidth = child.offsetWidth;
const childHeight = child.offsetHeight;

const leftChild = (parentWallWidth - childWidth) / 2;
const topChild = (parentWallHeight - childHeight) / 2;

child.style.left = `${leftChild}px`;
child.style.top = `${topChild}px`;
