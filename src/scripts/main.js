'use strict';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  const wallStyle = getComputedStyle(wall).position;

  if (wallStyle === 'static') {
    wall.style.position = 'relative';
  }

  spider.style.position = 'absolute';
  spider.style.margin = '0';

  function centerSpider() {
    const containerWidth = wall.clientWidth;
    const containerHeight = wall.clientHeight;

    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    const leftPos = Math.max(0, (containerWidth - spiderWidth) / 2);
    const topPos = Math.max(0, (containerHeight - spiderHeight) / 2);

    spider.style.left = `${leftPos}px`;
    spider.style.top = `${topPos}px`;
  }

  if (spider.tagName === 'IMG' && !spider.complete) {
    spider.addEventListener('load', centerSpider, { once: true });
  } else {
    centerSpider();
  }

  window.addEventListener('resize', centerSpider);
});
