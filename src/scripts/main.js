'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = parseFloat(wall.clientHeight) / 2
- parseFloat(spider.offsetHeight) / 2 + 'px';

spider.style.left = parseFloat(wall.clientWidth) / 2
- parseFloat(spider.offsetWidth) / 2 + 'px';
