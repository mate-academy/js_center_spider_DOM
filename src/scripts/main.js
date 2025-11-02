'use strict';

const elemSpider = document.querySelector('.spider');

const elemWall = document.querySelector('.wall');

elemWall.style.position = 'relative';

elemSpider.style.position = 'absolute';

const gorysontal = elemWall.clientWidth / 2 - elemSpider.offsetWidth / 2;

const vertical = elemWall.clientHeight / 2 - elemSpider.offsetHeight / 2;

elemSpider.style.left = gorysontal + 'px';
elemSpider.style.top = vertical + 'px';
