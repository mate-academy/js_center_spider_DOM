'use strict';

const div = document.body.querySelector('.wall');
const spider = document.body.querySelector('.spider');

const divSize = div.getBoundingClientRect();
const spiderSize = spider.getBoundingClientRect();

const spiderLeft = (divSize.width - spiderSize.width) / 2;
const spiderTop = (divSize.height - spiderSize.height) / 2;

spider.style.left = spiderLeft + 'px';
spider.style.top = spiderTop + 'px';
