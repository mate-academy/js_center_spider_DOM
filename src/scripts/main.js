'use strict';

const field = document.querySelector('.wall');

const spider = document.querySelector('.spider');

spider.style.left = field.clientWidth / 2 - spider.offsetWidth / 2 + 'px';

spider.style.top = field.clientHeight / 2 - spider.offsetHeight / 2 + 'px';
