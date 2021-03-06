'use strict';

// write code here
const div = document.querySelector('div');

const style = getComputedStyle(div);
const spider = getComputedStyle(div.children[0]);
const child = div.children[0];

child.style.top = `${(parseFloat(style.height)
  - parseFloat(spider.height)) / 2}px`;

child.style.left = `${(parseFloat(style.width)
  - parseFloat(spider.width)) / 2}px`;
