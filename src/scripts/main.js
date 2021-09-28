'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallCoordCenter = {
  top: wall.clientHeight / 2,
  left: wall.clientWidth / 2,
};
const spiderCoordCenter = {
  top: spider.clientHeight / 2,
  left: spider.clientWidth / 2,
};

spider.style.top = wallCoordCenter.top - spiderCoordCenter.top + 'px';
spider.style.left = wallCoordCenter.left - spiderCoordCenter.left + 'px';
