'use strict';

const ourWall = document.querySelector('.wall');
const ourSpider = document.querySelector('.spider');
const ourLeft = ourWall.clientWidth / 2 - ourSpider.clientWidth / 2;
const ourTop = ourWall.clientHeight / 2 - ourSpider.clientHeight / 2;

ourSpider.style.top = `${ourTop}px`;
ourSpider.style.left = `${ourLeft}px`;
