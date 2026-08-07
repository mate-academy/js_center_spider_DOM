'use strict';

const elemWall = document.querySelector('.wall');
const rectWall = elemWall.getBoundingClientRect();

const elemSpider = document.querySelector('.spider');
const rectSpider = elemSpider.getBoundingClientRect();

elemSpider.style.left = (rectWall.width - rectSpider.width) / 2 - 10 + 'px';

elemSpider.style.top = (rectWall.height - rectSpider.height) / 2 - 10 + 'px';

// const spiderHeight = elemSpider.offsetHeight;
// const spiderWidth = elemSpider.offsetWidth;
// const wallHeight = elemWall.clientHeight;
// const wallWidth = elemWall.clientWidth;

// const leftCoord = wallWidth / 2 - spiderWidth / 2;
// const topCoord = wallHeight / 2 - spiderHeight / 2;

// elemSpider.style.left = `${leftCoord}px`;
// elemSpider.style.top = `${topCoord}px`;
// elemSpider.style.position = 'absolute';
