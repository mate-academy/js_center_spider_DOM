'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const fieldW = field.clientWidth;
const fieldH = field.clientHeight;

const spiderW = spider.offsetWidth;
const spiderH = spider.offsetHeight;

const left = fieldW / 2 - spiderW / 2;
const up = fieldH / 2 - spiderH / 2;

spider.style.left = `${left}px`;
spider.style.top = `${up}px`;
