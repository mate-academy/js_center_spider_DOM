'use strict';

function centerSpider() {
  // Get the field (container) and spider elements
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Get the dimensions of the field and the spider
  const fieldRect = field.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Calculate the center position
  const centerX = fieldRect.width / 2 - spiderRect.width / 2;
  const centerY = fieldRect.height / 2 - spiderRect.height / 2;

  // Set the spider's position relative to the field
  spider.style.position = 'absolute';
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
}

// Call the function to center the spider
centerSpider();
