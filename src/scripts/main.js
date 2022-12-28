'use strict';

const spider = document.querySelector('.spider');

const spiderStyles = getComputedStyle(spider);
const wallStyles = getComputedStyle(document.querySelector('.wall'));

const spiderSize = parseFloat(spiderStyles.width);

const wallSize = parseFloat(wallStyles.width);

const coords = wallSize / 2 - spiderSize / 2;

spider.style.marginLeft = `${coords}px`;
spider.style.marginTop = `${coords}px`;
