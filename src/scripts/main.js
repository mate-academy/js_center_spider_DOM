'use strict';

const field = document.querySelector('.wall');
const spider = field.querySelector('.spider');

const spiderPosTop = (field.clientWidth - spider.clientWidth) / 2 + 'px';
const spiderPosLeft = (field.clientHeight - spider.clientHeight) / 2 + 'px';

spider.style.top = spiderPosTop;
spider.style.left = spiderPosLeft;
