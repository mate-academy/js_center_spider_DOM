'use strict';

const fild = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const fildWidth = fild.clientWidth;
const fildHeight = fild.clientHeight;
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const getCenterCoordinates = (widthParent, widthChild) => {
  return (widthParent - widthChild) / 2;
};

const centerByX = getCenterCoordinates(fildWidth, spiderWidth);
const centerByY = getCenterCoordinates(fildHeight, spiderHeight);

spider.style.left = `${centerByX}px`;
spider.style.top = `${centerByY}px`;
