'use strict';

const element = document.querySelector('.spider');
const field = document.querySelector('.wall');

function positionsCenter(area, item) {
  const areaSize = [area.clientWidth, area.clientHeight];
  const itemSize = [item.clientWidth, item.clientHeight];

  const [areaWidth, areaHeight] = areaSize;
  const [itemWidth, itemHeight] = itemSize;

  const centerWidth = areaWidth / 2 - itemWidth / 2;
  const centerHeight = areaHeight / 2 - itemHeight / 2;

  return [centerWidth, centerHeight];
}

const getPosition = positionsCenter(field, element);

element.style.top = `${getPosition[0]}px`;
element.style.left = `${getPosition[1]}px`;
