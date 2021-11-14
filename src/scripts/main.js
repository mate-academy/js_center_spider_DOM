'use strict';

const manhattanBuilding = document.querySelector('.wall');
const spiderMan = document.querySelector('.spider');

const centerX = manhattanBuilding.clientWidth / 2;
const centerY = manhattanBuilding.clientHeight / 2;
const spiderManFatness = spiderMan.offsetWidth / 2;
const spiderManHeight = spiderMan.offsetHeight / 2;

spiderMan.style.left = `${centerX - spiderManFatness}px`;
spiderMan.style.top = `${centerY - spiderManHeight}px`;
