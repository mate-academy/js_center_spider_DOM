'use strict';

const ourWall = document.querySelector('.wall');
const ourSpider = document.querySelector('.spider');

const widthWall = ourWall.clientWidth;
const heightWall = ourWall.clientHeight;

const widthSpider = ourSpider.clientWidth;
const heightSpider = ourSpider.clientHeight;

const topPosition = heightWall / 2 - heightSpider / 2;
const leftPosition = widthWall / 2 - widthSpider / 2;

ourSpider.style.position = 'absolute';
ourSpider.style.left = leftPosition + 'px';
ourSpider.style.top = topPosition + 'px';
