'use strict';

const plate = document.querySelector('.wall');
const plateSpider = document.querySelector('.spider');

function centreSpider() {
  if (!plate || !plateSpider) {
    return;
  }

  const plateWidth = plate.offsetWidth;
  const plateHeight = plate.offsetHeight;

  const spiderWidth = plateSpider.offsetWidth;
  const spiderHeight = plateSpider.offsetHeight;

  plate.style.position = 'relative';
  plateSpider.style.position = 'absolute';

  plateSpider.style.top = Math.round((plateHeight - spiderHeight) / 2) + 'px';
  plateSpider.style.left = Math.round((plateWidth - spiderWidth) / 2) + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
  if (plateSpider.complete) {
    centreSpider();
    window.addEventListener('resize', centreSpider);
  } else {
    plateSpider.addEventListener('load', centreSpider);
  }
});
