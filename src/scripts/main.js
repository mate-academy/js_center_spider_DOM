'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallStyle = getComputedStyle(wall);

wall.appendChild(spider);

spider.style.top = `${(parseFloat(wallStyle.width)
  / 2 - (parseFloat(spider.width) / 2))}px`;

spider.style.left = `${(parseFloat(wallStyle.height)
  / 2 - (parseFloat(spider.height) / 2))}px`;
