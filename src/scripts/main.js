'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top = `${wall.clientHeight / 2 - spider.clientHeight / 2}px`;
spider.style.left = `${wall.clientWidth / 2 - spider.clientWidth / 2}px`;

// Second variant of solution
/*
spider.style.cssText = `
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
*/
