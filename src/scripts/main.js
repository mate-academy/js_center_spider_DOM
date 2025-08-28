'use strict';

const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

wallElement.style.position = 'relative';
spiderElement.style.position = 'absolute';

spiderElement.style.top =
  (wallElement.clientHeight - spiderElement.offsetHeight) / 2 + 'px';

spiderElement.style.left =
  (wallElement.clientWidth - spiderElement.offsetWidth) / 2 + 'px';
