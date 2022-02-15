'use strict';

const rootElement = document.querySelector('.spider');
const root = document.querySelector('.wall');
const style = getComputedStyle(root);
const style1 = getComputedStyle(rootElement);

rootElement.style.top = `${(parseFloat(style.width) -
  parseFloat(style1.width))/2}px`;
rootElement.style.left = `${(parseFloat(style.height) -
    parseFloat(style1.height))/2}px`;
