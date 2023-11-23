'use strict';

const toyElement = document.querySelector('.spider');

const halfOfToyHeight = toyElement.offsetWidth / 2;
const centerPos = (document.querySelector('.wall').clientWidth / 2);

toyElement.style.top = `${centerPos - halfOfToyHeight}px`;
toyElement.style.left = `${centerPos - halfOfToyHeight}px`;
