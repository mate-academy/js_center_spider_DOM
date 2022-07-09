'use strict';

// write code here
const wall = document.querySelector('.wall');
const newElem = document.createElement('div');
const spider = document.querySelector('.spider');

wall.append(newElem);
newElem.append(spider);

newElem.style.cssText = `
  position: absolute;
  top: ${wall.clientHeight / 2 - spider.clientHeight / 2}px;
  left: ${wall.clientWidth / 2 - spider.clientHeight / 2}px
`;
