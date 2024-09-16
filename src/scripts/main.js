'use strict';

// write code here
const spiderRef = document.querySelector('.spider');
const placeRef = document.querySelector('.wall');

const widthSpider = spiderRef.offsetWidth;
const heightSpider = spiderRef.offsetHeight;
const widthPlace = placeRef.offsetWidth;
const heightPlace = placeRef.offsetHeight;

spiderRef.style.marginTop = `${(heightPlace / 2) - (heightSpider / 2)}px`;
spiderRef.style.marginLeft = `${(widthPlace / 2) - (widthSpider / 2)}px`;
