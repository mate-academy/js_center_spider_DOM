'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderTop = (wall.clientHeight / 2) - (spider.offsetHeight / 2);
const spiderLeft = (wall.clientWidth / 2) - (spider.offsetWidth / 2);

spider.style.cssText = `top: ${spiderTop}px;
  left: ${spiderLeft}px;
`;
