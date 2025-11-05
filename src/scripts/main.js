'use strict';

const container = document.querySelector('.wall');
const elem = document.querySelector('.spider');

container.style.position = 'relative';

elem.style.position = 'absolute';
elem.style.top = '50%';
elem.style.left = '50%';
elem.style.transform = 'translate(-50%, -50%)';
