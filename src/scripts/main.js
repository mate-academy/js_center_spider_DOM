'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!container || !spider) {
    return;
  }

  container.style.position = 'relative';

  const positionSpider = () => {
    if (!container || !spider) {
      return;
    }

    const contSize = container.getBoundingClientRect();
    const width = spider.offsetWidth;
    const height = spider.offsetHeight;

    spider.style.position = 'absolute';
    spider.style.left = (contSize.width - width) / 2 + 'px';
    spider.style.top = (contSize.height - height) / 2 + 'px';
  };

  if (spider.complete) {
    positionSpider();
  } else {
    spider.addEventListener('load', positionSpider);
  }

  window.addEventListener('resize', positionSpider);
});
