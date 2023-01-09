'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;

// should work also.
// spider.style.cssText = `
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
