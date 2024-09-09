'use strict';

// write code here
const el = {
  wall: document.getElementsByClassName('wall')[0],
  spider: document.getElementsByClassName('spider')[0],
};

const spiderTop = el.wall.clientHeight / 2 - el.spider.clientHeight / 2;
const spiderLeft = el.wall.clientWidth / 2 - el.spider.clientWidth / 2;

el.spider.style.top = `${spiderTop}px`;
el.spider.style.left = `${spiderLeft}px`;
