'use strict';

window.addEventListener('load', () => {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (field && spider) {
    const fieldWidth = field.clientWidth;
    const fieldHeight = field.clientHeight;
    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    const centerX = (fieldWidth - spiderWidth) / 2;
    const centerY = (fieldHeight - spiderHeight) / 2;

    spider.style.position = 'absolute';
    spider.style.left = `${centerX}px`;
    spider.style.top = `${centerY}px`;
  }
});
