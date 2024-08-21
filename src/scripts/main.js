'use strict';

const spiderElem = document.querySelector('.spider');

const wallElem = document.querySelector('.wall');

const wallCoords = wallElem.getBoundingClientRect();

const spiderCoords = spiderElem.getBoundingClientRect();

const wallStyles = window.getComputedStyle(wallElem);

const wallBorderWidth = wallStyles.getPropertyValue('border-width');

let unlttrdWallBorderWidth = '';

const neededSigns = '0123456789.';

for (const sign of wallBorderWidth) {
  if (neededSigns.includes(sign)) {
    unlttrdWallBorderWidth += sign;
  }
}

const wallCntrY = (wallCoords.height - Number(unlttrdWallBorderWidth) * 2) / 2;

const wallCntrX = (wallCoords.width - Number(unlttrdWallBorderWidth) * 2) / 2;

spiderElem.style.left = wallCntrX - spiderCoords.width / 2 + 'px';

spiderElem.style.top = wallCntrY - spiderCoords.height / 2 + 'px';
