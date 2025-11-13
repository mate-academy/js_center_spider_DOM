'use strict';

// write code here
const container = document.querySelector('.wall');
const insect = document.querySelector('.spider');

const wallWidth = container.offsetWidth;
const wallHeight = container.offsetHeight;

const spiderWidth = insect.offsetWidth;
const spiderHeight = insect.offsetHeight;

insect.style.left = (wallWidth - spiderWidth) / 2 + 'px';
insect.style.top = (wallHeight - spiderHeight) / 2 + 'px';
