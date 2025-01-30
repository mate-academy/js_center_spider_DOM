'use strict';

// write code here
const walls = document.getElementsByTagName('div');
const spiders = document.getElementsByTagName('img');

const wallHeight = parseInt(walls[0].style.offsetHeight / 2);
const wallWidth = parseInt(walls[0].style.offsetWidth / 2);

spiders[0].style.position = 'absolute';

let topValue = parseInt(spiders[0].style.top);

topValue += parseInt(wallHeight);

let leftValue = parseInt(spiders[0].style.left);

leftValue += parseInt(wallWidth);

spiders[0].style.top = topValue;
spiders[0].style.left = leftValue;
