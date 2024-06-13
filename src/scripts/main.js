'use strict';

// get img and div elements by their class
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// set styles to center a spider
wall.style.position = 'relative';
spider.style.position = 'absolute';
spider.style.top = '50%';
spider.style.left = '50%';
spider.style.transform = 'translate(-50%, -50%)';
