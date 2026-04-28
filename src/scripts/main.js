'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function spiderCenter(field, img) {
  const fieldWidth = field.offsetWidth;
  const fieldHeight = field.offsetHeight;

  const imgWidth = img.offsetWidth;
  const imgHeight = img.offsetHeight;

  const imgLeft = (fieldWidth - imgWidth) / 2 - 10;
  const imgTop = (fieldHeight - imgHeight) / 2 - 10;

  img.style.left = imgLeft + 'px';
  img.style.top = imgTop + 'px';
}

spiderCenter(wall, spider);
