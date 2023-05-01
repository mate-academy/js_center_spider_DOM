'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerObject(area, object) {
  const objectWidth = object.width;
  const objectHeight = object.height;
  const areaHeight = area.clientHeight;
  const areaWidth = area.clientWidth;

  object.style.position = 'relative';
  spider.style.position = 'absolute';
  spider.style.left = `${(areaWidth - objectWidth) / 2}px`;
  spider.style.top = `${(areaHeight - objectHeight) / 2}px`;
}

centerObject(wall, spider);
