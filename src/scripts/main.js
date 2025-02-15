'use strict';

const wall = document.querySelector('.wall');
const imgElem = document.querySelector('img');

const widthWall = wall.offsetWidth;
const widthImg = imgElem.offsetWidth;

const retreat = widthWall / 2 - widthImg / 2 - 10;

imgElem.style.top = retreat + 'px';
imgElem.style.left = retreat + 'px';
