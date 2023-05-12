'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const wallComputesStyle = getComputedStyle(wall);
const spiderComputedStyle = getComputedStyle(spider);

// eslint-disable-next-line
const wallWidth = wallComputesStyle.getPropertyValue("width"); // in this case width equals to height however it would be better to select them both
const wallHeight = wallComputesStyle.getPropertyValue('height');

const spiderWidth = spiderComputedStyle.getPropertyValue('width');
const spiderHeight = spiderComputedStyle.getPropertyValue('height');

function getPaddingValue(wallSize, spiderSize) {
  return `${parseFloat(wallSize) / 2 - parseFloat(spiderSize) / 2}px`;
}

spider.style.paddingTop = getPaddingValue(wallHeight, spiderHeight);
spider.style.paddingLeft = getPaddingValue(wallHeight, spiderWidth);
