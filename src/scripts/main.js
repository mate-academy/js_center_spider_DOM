'use strict';

const spider = document.querySelector('img.spider');
const wall = document.querySelector('div.wall');

function centrelize(element, place) {
  const placeWidth = place.clientWidth;
  const placeHeight = place.clientHeight;
  const elementWidth = element.getBoundingClientRect().width;
  const elementHeight = element.getBoundingClientRect().height;
  const centrePlace = [placeHeight / 2, placeWidth / 2];
  const centreElement = [elementHeight / 2, elementWidth / 2];

  element.style.top = `${centrePlace[0] - centreElement[0]}px`;
  element.style.left = `${centrePlace[1] - centreElement[1]}px`;
}

centrelize(spider, wall);
