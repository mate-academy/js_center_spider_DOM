'use strict';

const CALC = 'calc(50% - 25px)';

const div = document.getElementsByTagName('div')[0];
const spider = div.getElementsByTagName('img')[0];

spider.style.position = 'absolute';
spider.style.left = CALC;
spider.style.top = CALC;
