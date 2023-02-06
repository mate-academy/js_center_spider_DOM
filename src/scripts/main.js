'use strict';

const spiderMan = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spiderMan.style.left = (wall.clientWidth - spiderMan.offsetWidth) / 2 + 'px';

spiderMan.style.top = (wall.clientHeight - spiderMan.offsetHeight) / 2 + 'px';
