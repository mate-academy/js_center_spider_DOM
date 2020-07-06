'use strict';

const spider = document.querySelector('.spider');
const wallStyle = window.getComputedStyle(spider.offsetParent);
const spiderStyle = window.getComputedStyle(spider);
const halfWidth = parseFloat(wallStyle.width) / 2
- parseFloat(spiderStyle.width) / 2;
const halfHeight = parseFloat(wallStyle.height) / 2
- parseFloat(spiderStyle.height) / 2;

spider.style.cssText = `top: ${halfHeight}px; left: ${halfWidth}px;`;
