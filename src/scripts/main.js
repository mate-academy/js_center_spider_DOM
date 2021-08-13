'use strict';

const field = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const spiderCoords = spider.getBoundingClientRect();

spider.style.left = field.clientWidth / 2 - spiderCoords.width / 2 + 'px';

spider.style.top = field.clientHeight / 2 - spiderCoords.height / 2 + 'px';
