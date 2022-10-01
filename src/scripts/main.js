'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const centerHorisontal = (wall.clientWidth / 2) - (spider.clientWidth / 2);
const centerVertical = (wall.clientHeight / 2) - (spider.clientHeight / 2);

spider.style.marginLeft = centerHorisontal + 'px';
spider.style.marginTop = centerVertical + 'px';
