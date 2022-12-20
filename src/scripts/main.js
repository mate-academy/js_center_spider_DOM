'use strict';

const spyder = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spyderHight = spyder.offsetHeight;
const spyderWidth = spyder.offsetWidth;
const wallHight = wall.clientHeight;
const wallWidth = wall.clientWidth;

spyder.style.top = `${wallHight / 2}px`;
spyder.style.left = `${wallWidth / 2}px`;

spyder.style.transform
= `translate(-${spyderWidth / 2}px, -${spyderHight / 2}px)`;
