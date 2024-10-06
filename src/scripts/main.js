'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const getwall = getComputedStyle(wall);
const getSpider = getComputedStyle(spider);

const topCenter = (killPx(getwall.width) - killPx(getSpider.width)) / 2;
const leftCenter = (killPx(getwall.height) - killPx(getSpider.height)) / 2;

spider.style.cssText = `
top:${topCenter}px;
left:${leftCenter}px;`;

function killPx(px) {
  return Number(px.replace('px', ''));
}
