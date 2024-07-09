'use strict';

const wall = document.querySelector('.wall');
const wallCoords = wall.getBoundingClientRect();
const spider = document.querySelector('.spider');

spider.style.left = `${wallCoords.width / 2}px`;
spider.style.top = `${wallCoords.height / 2}px`;
spider.style.transform = 'translate(-50%, -50%)';
