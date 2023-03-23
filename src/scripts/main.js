'use strict';

const wall = document.querySelector('.wall');
const elementSpider = document.querySelector('.spider');

const horizontal = (parseFloat(getComputedStyle(wall).width) / 2)
  - (parseFloat(getComputedStyle(elementSpider).width) / 2);
const vertical = (parseFloat(getComputedStyle(wall).height) / 2)
  - (parseFloat(getComputedStyle(elementSpider).height) / 2);

elementSpider.style.left = `${horizontal}px`;

elementSpider.style.top = `${vertical}px`;
