'use strict';

const rootElement = document.querySelector('.spider');
const root = document.querySelector('.wall');
const style = getComputedStyle(root);

rootElement.style.marginTop = `${parseFloat(style.height)/2}px`;
rootElement.style.marginLeft = `${parseFloat(style.width)/2}px`;
