'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallHeight = wall.clientHeight;
const wallWidth = wall.clientWidth;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

spider.style.top = (wallHeight - spiderHeight) / 2 + 'px';
spider.style.left = (wallWidth - spiderWidth) / 2 + 'px';

// easier variant for this task
// wall.style.display = 'flex';
// wall.style.justifyContent = 'center';
// wall.style.alignItems = 'center';

// spider.style.position = 'relative';
