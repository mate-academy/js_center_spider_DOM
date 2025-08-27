'use strict';

function centreSpider() {
  const plate = document.querySelector('.wall');
  const plateSpider = document.querySelector('.spider');

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

centreSpider();
