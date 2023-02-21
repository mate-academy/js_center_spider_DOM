'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const coordTop = (wall.getBoundingClientRect().height / 2)
- (spider.getBoundingClientRect().height / 2) - 10;
const coordLeft = (wall.getBoundingClientRect().width / 2)
- (spider.getBoundingClientRect().width / 2) - 10;

spider.style.boxSizing = 'border-box';
spider.style.top = `${coordTop}px`;
spider.style.left = `${coordLeft}px`;
