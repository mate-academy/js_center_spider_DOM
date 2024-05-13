'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

Object.assign(spider.style, {
  position: 'static',
});

Object.assign(wall.style, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
