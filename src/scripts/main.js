'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (field && spider) {
    const fieldRect = field.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const centerX = fieldRect.left + fieldRect.width / 2 - spiderRect.width / 2;
    const centerY =
      fieldRect.top + fieldRect.height / 2 - spiderRect.height / 2;

    spider.style.position = 'absolute';
    spider.style.left = `${centerX}px`;
    spider.style.top = `${centerY}px`;
  }
});
