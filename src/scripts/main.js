'use strict';

const wall = document.querySelector('.wall');

const wallStyles = getComputedStyle(wall);

const wallSize = parseFloat(wallStyles.height);

const spyder = document.querySelector('.spider');

const spyderStyles = getComputedStyle(spyder);
const spyderHeight = parseFloat(spyderStyles.height);

const spyderTop = (wallSize / 2) - spyderHeight / 2;
const spyderLeft = (wallSize / 2) - spyderHeight / 2;

spyder.style.marginTop = `${spyderTop}px`;
spyder.style.marginLeft = `${spyderLeft}px`;
