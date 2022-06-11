'use strict';

const area = document.querySelector('.wall');
const spiderMan = document.querySelector('.spider');

const spiderTop = area.clientHeight / 2 - spiderMan.clientHeight / 2;
const spiderLeft = area.clientWidth / 2 - spiderMan.clientWidth / 2;

spiderMan.style.top = `${spiderTop}px`;
spiderMan.style.left = `${spiderLeft}px`;
