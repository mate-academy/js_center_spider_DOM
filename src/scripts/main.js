'use strict';

const spider = document.querySelector('.spider');
const spiderStyles = getComputedStyle(spider);

const spiderParent = spider.parentNode;
const spiderParentStyles = getComputedStyle(spiderParent);

const spiderWidth = Number.parseFloat(spiderStyles.width);
const spiderParentWidth = Number.parseFloat(spiderParentStyles.width);

const spiderHeight = Number.parseFloat(spiderStyles.height);
const spiderParentHeight = Number.parseFloat(spiderParentStyles.height);

spider.style.marginLeft = `${(spiderParentWidth - spiderWidth) / 2}px`;
spider.style.marginTop = `${(spiderParentHeight - spiderHeight) / 2}px`;
