'use strict';

const spider = document.querySelector('.spider');
const field = document.querySelector('.wall');
const horizontalIndentation = (field.clientWidth - spider.offsetWidth) / 2;
const verticalIndentation = (field.clientHeight - spider.offsetHeight) / 2;

spider.style.left = `${horizontalIndentation}px`;
spider.style.top = `${verticalIndentation}px`;
