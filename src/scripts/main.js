'use strict';

const element = document.querySelector('.wall');
const elemStyle = getComputedStyle(element);

const item = document.querySelector('.spider');
const itemStyle = getComputedStyle(item);

const spiderWidth = (parseFloat(elemStyle.width) / 2)
  - (parseFloat(itemStyle.width) / 2);
const spiderHeight = parseFloat(elemStyle.height) / 2
- (parseFloat(itemStyle.height) / 2);

item.style.top = `${spiderWidth}px`;
item.style.left = `${spiderHeight}px`;
