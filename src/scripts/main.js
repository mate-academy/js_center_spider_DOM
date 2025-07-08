'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.style.position = 'relative';

spider.style = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);`;
