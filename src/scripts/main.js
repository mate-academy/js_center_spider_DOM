'use strict';

const spiderItem = document.querySelector('.spider');
const wallItem = document.querySelector('.wall');

const style = window.getComputedStyle(wallItem);

const styleWidth = style.width;
const styleHeight = style.height;
const spiderHalfWidth = spiderItem.width / 2;
const spiderHalfHeight = spiderItem.height / 2;

const spiderTop = parseFloat(styleHeight);
const spiderLeft = parseFloat(styleWidth);

spiderItem.style.cssText = `top: ${spiderTop / 2 - spiderHalfHeight}px;
right: ${spiderLeft / 2 - spiderHalfWidth}px; left: auto;`;
