'use strict';

const wallElement = document.body.firstElementChild;
const spiderElement = wallElement.firstElementChild;

const widthWall = wallElement.clientWidth;
const heightWall = wallElement.clientHeight;
const widthSpider = spiderElement.clientHeight;
const heightSpider = spiderElement.clientHeight;

spiderElement.style.top = `${heightWall / 2}` - `${heightSpider / 2}` + 'px';
spiderElement.style.left = `${widthWall / 2}` - `${widthSpider / 2}` + 'px';
