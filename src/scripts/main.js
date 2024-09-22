/* eslint-disable no-unused-vars */
'use strict';

const getWall = document.querySelector('.wall');
const getSpider = document.querySelector('.spider');

const devisionWidth = getWall.clientWidth / 2;

const devisionHeight = getWall.clientHeight / 2;

const devisionSpiderHeight = getSpider.clientHeight / 2;

const devisionSpiderWidth = getSpider.clientWidth / 2;

getSpider.style.left = devisionWidth - devisionSpiderWidth + 'px';
getSpider.style.top = devisionHeight - devisionSpiderHeight + 'px';

getWall.appendChild(getSpider);
