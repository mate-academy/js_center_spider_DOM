'use strict';

// write code here
const spider = document.querySelector('.spider');
const wall = spider.offsetParent;

const calcPosition = () => {
  return (wall.clientWidth / 2) - (spider.clientWidth / 2) + 'px';
};

spider.style.transform = `translate(${calcPosition()}, ${calcPosition()})`;

// Or (top, left 50% ) + (translate(-50%, -50%))
// But i can't believe that we need this one
