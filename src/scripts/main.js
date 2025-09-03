'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// ensure positioning context
field.style.position = 'relative';

const centerSpider = () => {
  const fieldWidth = field.clientWidth;
  const fieldHeight = field.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const centerX = (fieldWidth - spiderWidth) / 2;
  const centerY = (fieldHeight - spiderHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
};

// handle timing of image load
if (spider.complete) {
  // already loaded (cached images)
  centerSpider();
} else {
  // wait until load finishes
  spider.addEventListener('load', centerSpider);
}
