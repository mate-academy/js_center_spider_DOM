'use strict';

const wall = document.querySelector('.wall');

// wall.style.display = 'flex';
// wall.style.justifyContent = 'center';

const spider = document.querySelector('.spider');

// spider.style.position = 'relative';
// spider.style.alignSelf = 'center';

const leftOffset = (wall.clientWidth - spider.clientWidth) / 2;
const topOffset = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = `${leftOffset}px`;
spider.style.top = `${topOffset}px`;
