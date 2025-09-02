'use strict';

const spider = document.querySelector('.spider');

function centerSpider() {
  const spiderStyle = getComputedStyle(spider);
  const spiderWidth = parseInt(spiderStyle.width);
  const spiderHeight = parseInt(spiderStyle.height);

  const field = document.querySelector('.wall');

  if (field) {
    const fieldStyle = getComputedStyle(field);
    const fieldWidth = parseInt(fieldStyle.width);
    const fieldHeight = parseInt(fieldStyle.height);

    Object.assign(spider.style, {
      top: `${(fieldHeight - spiderHeight) / 2}px`,
      left: `${(fieldWidth - spiderWidth) / 2}px`,
    });
  }
}

if (spider.complete && spider.naturalWidth !== 0) {
  centerSpider();
} else {
  spider.addEventListener('load', centerSpider);
}
