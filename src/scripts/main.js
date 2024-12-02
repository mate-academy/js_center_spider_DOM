'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

Object.assign(wall.style, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

spider.style.position = 'relative';
