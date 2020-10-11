'use strict';

const wallItem = document.querySelector('.wall');
const spiderItem = document.querySelector('.spider');
const wallHeight = wallItem.clientHeight;
const wallWidth = wallItem.clientWidth;
const spiderHeight = spiderItem.offsetHeight;
const spiderWidth = spiderItem.offsetWidth;
const centerHorizontal = wallWidth / 2 - spiderWidth / 2;
const centerVertical = wallHeight / 2 - spiderHeight / 2;

spiderItem.style.transform = `
translate(${centerHorizontal}px, ${centerVertical}px) rotate(360deg)
`;
