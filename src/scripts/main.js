'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallStyle = getComputedStyle(wall);
const spiderStyle = getComputedStyle(spider);

spider.style.left = `${0.5 * (parseFloat(wallStyle.width)
- parseFloat(spiderStyle.width))}px`;

spider.style.top = `${0.5 * (parseFloat(wallStyle.height)
- parseFloat(spiderStyle.height))}px`;
