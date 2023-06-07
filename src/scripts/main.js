'use strict';

const wallElement = document.querySelector('.wall');
wallElement.style.position = 'relative';

const spiderElement = document.querySelector('.spider');
spiderElement.style.position = 'absolute';
spiderElement.style.top = '45%';
spiderElement.style.left = '45%';

spiderElement.style.transform = 'translate(-50%; -50%)';
