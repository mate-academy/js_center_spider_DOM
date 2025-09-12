'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.spider');
  const field = document.querySelector('.wall');

  if (!element || !field) {
    return;
  }

  function positionsCenter(area, item) {
    const areaSize = [area.clientWidth, area.clientHeight];
    const itemSize = [item.clientWidth, item.clientHeight];

    const [areaWidth, areaHeight] = areaSize;
    const [itemWidth, itemHeight] = itemSize;

    const centerWidth = areaWidth / 2 - itemWidth / 2;
    const centerHeight = areaHeight / 2 - itemHeight / 2;

    return { left: centerWidth, top: centerHeight };
  }

  if (element.complete) {
    const getPosition = positionsCenter(field, element);

    field.style.position = 'relative';
    element.style.position = 'absolute';
    element.style.top = `${getPosition.top}px`;
    element.style.left = `${getPosition.left}px`;
  }
});
