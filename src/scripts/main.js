'use strict';

const plate = document.querySelector('.wall');
const plateWidth = plate.offsetWidth;
const plateHeight = plate.offsetHeight;

const plateSpider = document.querySelector('.spider');
const spiderWidth = plateSpider.offsetWidth;
const spiderHeight = plateSpider.offsetHeight;

plateSpider.style.top = plateHeight / 2 - spiderHeight / 2 + 'px';
plateSpider.style.left = plateWidth / 2 - spiderWidth / 2 + 'px';
