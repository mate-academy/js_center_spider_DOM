'use strict';

const divWall = document.body.getElementsByClassName('wall');
const spider = document.body.getElementsByClassName('spider');

const stylesOfSpider = getComputedStyle(spider[0]);
const spiderImageWidth = parseFloat(stylesOfSpider.width);
const spiderImageHeight = parseFloat(stylesOfSpider.height);

divWall[0].style.position = 'relative';
divWall[0].style.boxSizing = 'border-box';
spider[0].style.position = 'absolute';
spider[0].style.top = `50%`;
spider[0].style.left = `50%`;

spider[0].style.margin = `-${spiderImageWidth / 2}px 0px
 0px -${spiderImageHeight / 2}px`;
