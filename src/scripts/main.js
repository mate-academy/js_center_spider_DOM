'use strict';

const body = document.querySelector('.wall');
const spider = body.querySelector('.spider');

spider.style.top = body.clientHeight / 2 + 'px';
spider.style.left = body.clientWidth / 2 + 'px';
spider.style.transform = 'translate(-50%,-50%)';

// write code here
