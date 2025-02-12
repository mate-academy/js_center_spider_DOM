'use strict';

const centerSpider = () => {
  // Get the field (wall) and spider elements
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Get the dimensions of the field and the spider
  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Calculate the position to center the spider
  const left = (wallWidth - spiderWidth) / 2;
  const spiderTop = (wallHeight - spiderHeight) / 2;

  // Set the position of the spider
  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${spiderTop}px`;
};

// Call the function to center the spider
centerSpider();
