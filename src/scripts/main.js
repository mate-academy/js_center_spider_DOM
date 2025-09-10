'use strict';

const spiderObj = document.querySelector('.spider');
const wallObj = document.querySelector('.wall');

if (!spiderObj || !wallObj) {
  throw new Error('Objects are not found');
}

wallObj.style.position = 'relative';
spiderObj.style.position = 'absolute';
spiderObj.style.top = '50%';
spiderObj.style.left = '50%';
spiderObj.style.transform = 'translate(-50%, -50%)';
