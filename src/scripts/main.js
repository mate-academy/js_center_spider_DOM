'use strict';

const spider = document.querySelector('.spider');
const width = document.querySelector('.wall').clientWidth;
const height = document.querySelector('.wall').clientHeight;

spider.style.top = `${(height / 2) - spider.offsetHeight / 2}px `;
spider.style.left = `${(width / 2) - spider.offsetWidth / 2}px `;
