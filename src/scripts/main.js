'use strict';

// write code here
const building = document.querySelector('.wall');
const insect = document.querySelector('.spider');

const buildingWidth = building.clientWidth;
const buildingHeight = building.clientHeight;
const insectWidth = insect.clientWidth;
const insectHeight = insect.clientHeight;

insect.style.position = 'relative';
insect.style.top = `${(buildingHeight / 2) - (insectHeight / 2)}px`;
insect.style.left = `${(buildingWidth / 2) - (insectWidth / 2)}px`;
