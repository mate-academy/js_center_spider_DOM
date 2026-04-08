'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.top =
  String(wall.clientHeight / 2 - spider.clientHeight / 2) + 'px';

spider.style.left =
  String(wall.clientWidth / 2 - spider.clientWidth / 2) + 'px';
