'use strict';

const wall = document.getElementsByClassName('wall')[0];
const spider = document.getElementsByClassName('spider')[0];

spider.style = ` 
  top: ${wall.clientHeight / 2 - spider.offsetHeight / 2}px; 
  left: ${wall.clientWidth / 2 - spider.offsetWidth / 2}px
`;
