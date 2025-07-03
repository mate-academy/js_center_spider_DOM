'use strict';

const walls = document.querySelector('.wall');
const wallW = walls.clientWidth;
const wallH = walls.clientHeight;

const pavyk = document.querySelector('.spider');
const spiderW = pavyk.clientWidth;
const spiderH = pavyk.clientHeight;

const topS = (wallH - spiderH) / 2;
const leftS = (wallW - spiderW) / 2;

pavyk.style.top = `${topS}px`;
pavyk.style.left = `${leftS}px`;
