'use strict';

const block = document.querySelector('.wall');
const blockWidth = block.clientWidth;
const blockHeight = block.clientHeight;

const picture = document.querySelector('.spider');
const pictureWidth = picture.clientWidth;
const pictureHeight = picture.clientHeight;

const positionLeft = (blockWidth - pictureWidth) / 2;
const positionTop = (blockHeight - pictureHeight) / 2;

picture.style.left = positionLeft + 'px';
picture.style.top = positionTop + 'px';
