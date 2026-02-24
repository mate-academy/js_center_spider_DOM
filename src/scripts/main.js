'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;
const offsetWidth = spider.getBoundingClientRect().width;
const offsetHeight = spider.getBoundingClientRect().height;

const centerX = (fieldWidth - offsetWidth) / 2;
const centerY = (fieldHeight - offsetHeight) / 2;

field.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;
