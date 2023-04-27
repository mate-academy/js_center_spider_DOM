'use strict';

function createAndGerStyle(element) {
  const styleElement = getComputedStyle(element);
  const widthElement = parseFloat(styleElement.width);
  const heightElement = parseFloat(styleElement.height);

  return [widthElement, heightElement];
}

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const [widthWall, heightWall] = createAndGerStyle(wall);
const [widthSpider, heightSpider] = createAndGerStyle(spider);

spider.style.top = `${heightWall / 2 - heightSpider / 2}px`;
spider.style.left = `${widthWall / 2 - widthSpider / 2}px`;
