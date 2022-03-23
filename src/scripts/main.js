'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// wall.style.display = 'flex';
// wall.style.justifyContent = 'center';
// wall.style.alignItems = 'center';

// spider.style.position = 'unset';

spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
